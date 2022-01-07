const { truncateSync } = require("fs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema ;


/// comment shema 
const CommentSchema = new Schema({
    postId:{
        type: String,
        index: true,
        require: true
    },
    userId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    like: {
        type: Number,
        default: 0
    },
    likelist: [String],
    createAt:{
        type: Number,
        default: Date.now
    }
});

module.exports = mongoose.model("comment", CommentSchema);