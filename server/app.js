require('dotenv').config()
const express = require('express');
const cors = require('cors');
const NodeGeocoder = require('node-geocoder');
const path = require('path');
// const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// mongoose.connect('mongodb://localhost/my_database');
// create schema for address
// save everything and add lat and lng
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const BlogPost = new Schema({
//   author: ObjectId,
//   title: String,
//   body: String,
//   date: Date
// });
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
let CronJob = require('cron').CronJob;
new CronJob('0 0 1 * *', function () {
    const myInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'
    };
    let myRequest = new Request('https://data.ct.gov/resource/htz8-fxbk.json', myInit);
    fetch(myRequest)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // let firstAddress = data[0];
            let geocoder = new google.maps.Geocoder();
            for (let i = 0; i < data.length; i++) {
                geocoder.geocode({ address: `${data[i].address}, ${data[i].city}, ${data[i].state}` }, (results, status) => {
                    if (status == 'OK') {
                        let markerObj = { position: {} };
                        markerObj.position.lat = results[0].geometry.location.lat();
                        markerObj.position.lng = results[0].geometry.location.lng();
                        this.markers.push(markerObj);
                    } else {
                        console.log(status);
                        i = 400;
                    }
                });
            }
            // setTimeout(() => {

            //   console.log(`Valids: ${valids} Invalids: ${invalids}`);
            // }, 1000)
        })
        .catch((error) => {
            console.log(error);
        });
    // console.log('You will see this message every second');
}, null, true, 'America/New_York');



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
    res.send({ foo: "bar" });
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

app.listen(process.env.PORT || 4000);