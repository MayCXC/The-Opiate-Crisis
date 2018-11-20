require("dotenv").config();
const express = require("express");
const NodeGeocoder = require("node-geocoder");
const path = require("path");
const Address = require("./models/address");
const mongoose = require("mongoose");
const request = require("request");
const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");

const app = express();

// app.use(history());
app.use(serveStatic(path.join(__dirname, "..", "dist")));

mongoose.connect(
  process.env.MONGO_DB,
  { useNewUrlParser: true }
);

let db = mongoose.connection;
db.on("open", () => {
  console.log("Connected to DB");
});

let geocoderOptions = {
  provider: "google",
  httpAdapter: "https",
  apiKey: process.env.VUE_APP_API_KEY,
  formatter: null
};

let geocoder = NodeGeocoder(geocoderOptions);

// Execute a cron job first of every month to create a new database,
let CronJob = require("cron").CronJob;
const databaseJob = new CronJob(
  "0 0 1 * *",
  function() {
    fetchCTDataAndUpdateDatabase();
  },
  null,
  true,
  "America/New_York"
);
databaseJob.start();

// https://stackoverflow.com/questions/16561296/finding-nearest-locations-using-google-maps-api
app.get("/api/markers", (req, res) => {
  console.log("HIT ROUTE");
  let credentialType = req.query.credentialType;
  if (credentialType) {
    Address.find({ credentialtype: credentialType }, (err, addresses) => {
      res.json(addresses);
    });
  } else {
    Address.find({}, (err, addresses) => {
      res.json(addresses);
    });
  }
});

function fetchCTDataAndUpdateDatabase() {
  db.dropCollection("addresses", err => {
    // if err and database doesn't exists continue
    if (err && err.code != 26) return console.log(err);
    // CT DATA ENDPOINTS
    let substanceAbuseCareFacilitiesAPI =
      "https://data.ct.gov/resource/htz8-fxbk.json";
    let certifiedAlcoholAndDrugCounselorsAPI =
      "https://data.ct.gov/resource/63fh-b7ub.json";
    let naloxonePharmaciesAPI = "https://data.ct.gov/resource/4vs4-3cb3.json";
    let apiEndpoints = [
      substanceAbuseCareFacilitiesAPI,
      certifiedAlcoholAndDrugCounselorsAPI,
      naloxonePharmaciesAPI
    ];
    // Loop that fetches data for each endpoint
    for (let i = 0; i < apiEndpoints.length; i++) {
      // Header sent with request to each endpoint
      const options = {
        url: apiEndpoints[i],
        headers: {
          "Content-Type": "application/json"
        }
      };
      request(options, (error, respone, body) => {
        if (!error && respone.statusCode == 200) {
          let addressData = JSON.parse(body); // get the json from the response body
          let addressString = "";
          let addressObj = {};
          let credential = "";
          // Loop that gets the geocoded address for each object in
          // the response and adds the relevant properties to the
          // address object
          // TODO: not finding address for all, limited to 20 for now
          for (let j = 0; j < addressData.length; j++) {
            // IIFE that has a copy of each j and creates a closure
            // around settimeout
            (function(index) {
              // if (addressData[index].status == 'ACTIVE') {
              setTimeout(() => {
                addressString = `${addressData[index].address}, ${
                  addressData[index].city
                }, ${addressData[index].state}`;
                credential = addressData[index].credential.toLowerCase();
                geocoder
                  .geocode(addressString)
                  .then(res => {
                    addressObj.name = addressData[index].name
                      ? addressData[index].name
                      : addressData[index].pharmacy_name
                        ? addressData[index].pharmacy_name
                        : "NAME UNAVAILBLE";
                    addressObj.type = addressData[index].type
                      ? addressData[index].type
                      : "PHARMACY";
                    addressObj.credential = credential.includes("pcy")
                      ? "Pharmacy"
                      : credential;
                    addressObj.credentialtype = credential.includes("pcy")
                      ? "NPHAR"
                      : credential.includes("substance")
                        ? "SAF"
                        : "ADC";
                    addressObj.credentialid = addressData[index].credentialid;
                    if (res[0] != undefined) {
                      addressObj.location = res[0].formattedAddress;
                      addressObj.lat = res[0].latitude;
                      addressObj.lng = res[0].longitude;
                      addressObj.placeid = res[0].extra.googlePlaceId;
                      Address.create(addressObj);
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }, 200 * j);
              // }
            })(j);
          }
        } else {
          console.log(error);
        }
      });
    }
  });
}

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
