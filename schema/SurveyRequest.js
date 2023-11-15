const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SurveyRequestSchema = new Schema({
    name: {type:String,default:""},
    projectNum: {type:String,default:""},
    projectName: {type:String,default:""},
    projectFolder: {type:String,default:""},
    taskNum: {type:String,default:""},
    taskName: {type:String,default:""},
    budget: {type:Number,default:null},
    earned: {type:Number,default:null},
    priority: {type:String,default:""},
    recievedDate: {type:Date,default:null},
    scheduledDate: {type:Date,default:null},
    requestCompleted: {type:Boolean,default:false},
    crewChief: {type:String,default:""},
    chainmen: Array,
    files:Array,

  },{minimize:false})

module.exports = SurveyRequests = mongoose.model('surveyRequest',SurveyRequestSchema);