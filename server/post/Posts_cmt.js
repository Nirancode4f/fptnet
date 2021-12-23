const mongoose = require("mongoose")

const Schema = mongoose.Schema 

///post schema

const PostSchema = new Schema({
        
    title: {
        type: String,
        required: true,
    },
    user:{
        type: String,
        required:true,
        ref: "user"
    },
    content:{
        type: String,
    },
    image:{
        
    },
    like:{
        type: Number,
    },
    comment:{
        tpye: Array
    },
    creatAt:{
        type: Date,
        default: Date.now
    }
})


/// comment shema 
const CommentSchema = new Schema({
    post:{
        type: String,
        ref: "post"
    },

    user:{
        type:String
    },
    content:{
        type:String
    },
    like:{
        type: Number
    },
    createAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("post", PostSchema)
module.exports = mongoose.model("postcomment", CommentSchema)