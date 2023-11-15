const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SurveyorSchema = new Schema({
    name: {type:String,default:""},
    title: {type:String,default:""},

  },{minimize:false})

module.exports = Surveyor = mongoose.model('surveyor',SurveyorSchema);