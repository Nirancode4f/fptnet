const { truncateSync } = require("fs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema ;


/// comment shema 
const CommentSchema = new Schema({
    post:{
        type: String,
        require: true,
        ref: "post"
    },

    user: {
        type: String,
        required: true
    },
    content: String,
    image: String,
    like: Number,
    createAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("comment", CommentSchema);