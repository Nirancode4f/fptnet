const { truncateSync } = require("fs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema ;

///post schema

const PostSchema = new Schema({
        
    user:{
        type: String,
        required:true,
        ref: "user"
    },
    content: String,
    image: String,
    like: Number,
    creatAt:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("post", PostSchema);