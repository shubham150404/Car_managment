const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slider5schema = new Schema({
  photo5: String,
});

const slider5 = mongoose.model("slider5",slider5schema) 

module.exports = slider5;