
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        index: true,
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
        required: false
    },
    picture: {
        type: String,
        default: ""
    },
    student: {
        type: Boolean,
        default: true
    },
    chatlist: {
        conversations: [String],
        groupconversations: [String]
    },
    friendlist: {
        Friends: [String],
        FriendRequests: [String],
        SentRequests: [String]
    },
    totalposts: {
        type: Number,
        default: 0
    },
    clubs: [String],
    major: {
        type: String,
        default: ""
    },
    slogan: {
        type: String,
        default: ""
    },
    status: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model("user", UserSchema);