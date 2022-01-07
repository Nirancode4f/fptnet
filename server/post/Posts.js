const { truncateSync } = require("fs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema ;

///post schema

const PostSchema = new Schema({
    userId:{
        type: String,
        index: true,
        required: true,
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
    likelist: [String],
    comments: [Schema.Types.Mixed],
    createAt: {
        type: Number,
        default: Date.now
    }
});


module.exports = mongoose.model("post", PostSchema);