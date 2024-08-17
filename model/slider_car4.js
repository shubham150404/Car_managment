const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slider4schema = new Schema({
  photo4: String,
});

const slider4 = mongoose.model("slider4",slider4schema) 

module.exports = slider4;