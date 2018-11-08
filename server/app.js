require('dotenv').config()
const express = require('express');
const cors = require('cors');
const NodeGeocoder = require('node-geocoder');
const path = require('path');
const Address = require('./models/address');
const mongoose = require("mongoose");
const request = require("request");

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

mongoose.connect("mongodb://isolution:eMvNaUnimsmVL46@ds155263.mlab.com:55263/the-opiate-crisis");
let db = mongoose.connection;
db.on('open', () => {
    console.log('Connected');
});
let geocoderOptions = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: process.env.API_KEY,
    formatter: null
};

let geocoder = NodeGeocoder(geocoderOptions);

// Execute a cron job first of every month to create a new database,
// keep a backup of 3 databases and use the most recent one for the api route - MAYBE
// cron job should make a post request to the post route
// let CronJob = require('cron').CronJob;
// new CronJob('0 0 1 * *', function () {

// console.log('You will see this message every second');
// }, null, true, 'America/New_York');



// send addresses as an array of marker objects
// let markerObj = { position: {} };
// markerObj.position.lat = results[0].geometry.location.lat();
// markerObj.position.lng = results[0].geometry.location.lng();
// this.markers.push(markerObj);
// get user's data to show the closest addresses by using find and setting it to
// within whatever degrees for lat and lng
// send a type attribute with each request to differentiate between which
// database should be sent
app.get('/api/markers', (req, res) => {
    console.log(req.params);
    Address.substanceAbuseAddresses.find({}, (err, addresses) => {
        res.json(addresses);
    });
});

// send stringified json data from ct data api with a type
// send a type attribute with each request to differentiate between which
// database should be sent
// when geocoding, wait an acceptable amount of time before making another
// request to avoid OVER_QUERY_LIMIT error
// https://stackoverflow.com/questions/11792916/over-query-limit-in-google-maps-api-v3-how-do-i-pause-delay-in-javascript-to-sl
// https://stackoverflow.com/questions/2419219/how-do-i-geocode-20-addresses-without-receiving-an-over-query-limit-response
app.post('/api/markers', (req, res) => {
    // geocoder.geocode(req.query.address)
    //     .then(data => ({
    //         raw: data.raw,
    //         data
    //     }))
    //     .then(json => res.send(json))
    //     .catch(next);
});

// drop collection then update it once a month
// this should take a type as a parameter to determine which url to fetch and
// which collection to drop and update
function makeFetch (mapType) {
    const options = {
        url: 'https://data.ct.gov/resource/htz8-fxbk.json',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    request(options, (error, respone, body) => {
        if (!error && respone.statusCode == 200) {
            let addressData = JSON.parse(body);
            let addressString = '';
            let addressObj = {};
            for (let i = 0; i < addressData.length; i++) {
                addressString = `${addressData[i].address}, ${addressData[i].city}, ${addressData[i].state}`;
                geocoder.geocode(addressString, (err, res) => {
                    if (err) { return console.log(err.message) }
                    addressObj.businessname = addressData[i].businessname;
                    addressObj.credential = addressData[i].credential;
                    addressObj.credentialid = addressData[i].credentialid;
                    addressObj.location = res[0].formattedAddress;
                    addressObj.lat = res[0].latitude;
                    addressObj.lng = res[0].longitude;
                    Address.substanceAbuseAddresses.create(addressObj)
                });
            }
        }
    })
}

app.listen(process.env.PORT || 4000);