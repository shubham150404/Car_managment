const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slider3schema = new Schema({
  photo3: String,
});

const slider3 = mongoose.model("slider3",slider3schema) 

module.exports = slider3;