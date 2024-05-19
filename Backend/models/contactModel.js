const mongoose = require('mongoose')


const contactSchema = mongoose.Schema({
    contact_fname: {
        type: String,
        // required: true
    },
    contact_lname: {
        type: String,
        // required: true
    },
    contact_email: {
        type: String,
        required: true
    },
    contact_phoneno:{
        type: String,
        // required: true
    },
    contact_message: {
        type: String,
        // required: true
    }

},{timestamps: true})
module.exports = mongoose.model("Contactmessage",contactSchema)