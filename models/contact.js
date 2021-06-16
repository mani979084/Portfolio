const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String
    }

})

module.exports = mongoose.model('contact', ContactSchema);