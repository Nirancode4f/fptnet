const mongoose = require("mongoose");

const Schema = mongoose.Schema;


var Deadline = new Schema({
    userId:{
        type: String,
        required:true
    },
    deadline:{
        type: String,
        required: true
    },
    deadlinedate:{
        type: Date,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    teacher: {
        type: String,
        default: ""
    },
    note: {
        type: String,
        default: ""
    },
    creatAt:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("deadline", Deadline);