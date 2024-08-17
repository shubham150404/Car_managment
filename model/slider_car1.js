const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slider1schema = new Schema({
  photo_: String,
});

const slider1 = mongoose.model("slider1",slider1schema) 

module.exports = slider1;

