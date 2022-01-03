
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
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
        required: true
    },
    picture: String,
    conversations: [String],
    groupconversations: [String],
    friendlist: {
        Friends: [String],
        FriendRequests: [String],
        SentRequests: [String]
    },
    clubs: [String],
    major: String,
    createAt: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model("user", UserSchema);