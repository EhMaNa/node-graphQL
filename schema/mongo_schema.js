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
const Hero = mongoose.model('Hero', heroSchema);
const Company = mongoose.model('Company', companySchema);





module.exports = {Hero, Company}
