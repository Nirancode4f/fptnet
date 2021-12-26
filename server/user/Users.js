
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username: { 
        type: String,
        required:true,
        unique:false
    },
    password: {
        type:String,
        required:true,
        unique:false
    },
    conversations: Array,
    groupconversations: Array,
    clbs: Array,
    major: String,
    createAt: {
        type:Date,
        default: Date.now
    }

});
module.exports = mongoose.model("user",UserSchema);