const mongoose = require("mongoose");

const Schema = mongoose.Schema;


var Deadline = new Schema({
    user:{
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
    teacher: String,
    note: String,
    creatAt:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("deadline", Deadline);