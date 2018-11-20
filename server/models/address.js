const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  name: String,
  type: String,
  credential: String,
  credentialtype: String,
  credentialid: String,
  location: String,
  lat: Number,
  lng: Number,
  placeid: String
});

module.exports = mongoose.model("Address", addressSchema);
