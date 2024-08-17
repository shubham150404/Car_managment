const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackschema = new Schema({
  username: String,
  email: String,
  number: Number,
  description :String  
});

const feedback = mongoose.model("feedback",feedbackschema) 

module.exports = feedback;

