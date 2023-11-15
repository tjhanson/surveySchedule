const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DaySchema = new Schema({
    date: {type:String,default:""},
    surveyors: {type:Array},

  },{minimize:false})

module.exports = Day = mongoose.model('day',DaySchema);