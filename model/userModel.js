const mongoose = require('mongoose');
const validator = require('validator');

const Counter = require('./counterModel');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        validate : [validator.isEmail, 'Please provide a valid email'],
        required : [true, 'A user must have an email'],
        unique : true
    },
    name : {
        type : String,
        required : [true, 'user should have a name']
    },
    photo : {
        type : String
    },
    phoneNumber: {
        type : String
    },
    institute : {
        type : String
    },
    branch : {
        type : String
    },
    year : {
        type : String
    },
    city : {
        type : String
    },
    caref : {
        type : String
    },
    id : {
        type : Number,
        unique : true
    },
    wissId : {
        type : String,
    },
    googleid : {
        type : String
    },
    accesstoken : {
        type : String
    }
});


const User = mongoose.model("User", userSchema);

module.exports = User;