const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zip: String,
});

module.exports = mongoose.model("Address", AddressSchema);