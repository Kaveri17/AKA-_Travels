const mongoose = require('mongoose')

const ItenarySchema = new mongoose.Schema({
    days:{
        type: Number,
        required: true
    },
    day_title:{
        type: String,
        required: true
    },

})
module.exports = mongoose.model("Itenary", ItenarySchema)
