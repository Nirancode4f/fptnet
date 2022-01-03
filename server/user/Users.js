
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    username: { 
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
<<<<<<< HEAD
    picture: String,
=======
    picture: Array,
>>>>>>> 94a5db170f7eb80486ad2462b7350ac0003900b8
    conversations: Array,
    groupconversations: Array,
    friendlist: Object,
    major: String,
    clubs: Array,
    createAt: {
        type:Date,
        default: Date.now
    }

});
module.exports = mongoose.model("user",UserSchema);