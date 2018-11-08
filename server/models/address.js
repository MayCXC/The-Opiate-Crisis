const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    businessname: String,
    credential: String,
    credentialid: String,
    location: String,
    lat: Number,
    lng: Number,
});

module.exports = {
    substanceAbuseAddresses: mongoose.model('Address', addressSchema),
}