const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SiteSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    coordinates : {
        type: Array,
        required: true
    },

    
})

module.exports = Site = mongoose.model('site',SiteSchema);