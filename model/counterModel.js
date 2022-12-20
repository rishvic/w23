const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    number : {
        type : Number,
        default : 0
    },
    name : {
        type : String,
        default : "user count"
    }
});

const Counter = mongoose.model("Counter", counterSchema);
module.exports = Counter;