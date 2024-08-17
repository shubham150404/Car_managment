const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slider2schema = new Schema({
  photo2: String,
});

const slider2 = mongoose.model("slider2",slider2schema) 

module.exports = slider2;