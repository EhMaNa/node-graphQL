const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },

});
const heroSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hero_name: {
        type: String,
        required: true
    },
    company : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }

});

module.exports = mongoose.model('Hero', heroSchema);
module.exports = mongoose.model('Company', companySchema);