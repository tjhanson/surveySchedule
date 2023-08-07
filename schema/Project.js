const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    img : {
        type: String,
        required: false
    },
    links : {
        type: Array,
        required: false
    },
    description : {
        type: String,
        required: false
    },

    
})

module.exports = Project = mongoose.model('project',ProjectSchema);