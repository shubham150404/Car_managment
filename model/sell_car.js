const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carsellSchema = new Schema({
    username: String,
    car_name: String,
    Km:String,
    Vehicle_Type : String,
    Ownership : String,
    reg_year : String,
    car_photos : String,

});

const car_sell = mongoose.model('car_sell',carsellSchema);

module.exports = car_sell;