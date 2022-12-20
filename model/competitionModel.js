const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    institute : {
        type : String,
        required : true
    },
    competition : {
        type : String,
        required : true
    },
    wissId : {
        type : String,
        required : true
    }
})

const competitionModel = mongoose.model("Competitions", competitionSchema);

module.exports = competitionModel;