const { truncateSync } = require("fs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema ;

///post schema

const PostSchema = new Schema({
        
    userId:{
        type: String,
        required:true,
        ref: "userId"
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
    comments: Array,
    createAt:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("post", PostSchema);