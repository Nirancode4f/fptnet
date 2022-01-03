
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FriendsSchema = new Schema({
    userId:{
        type: String,
        require: true,
        unique: true
    },
    Friends: Array,
    FriendRequests: Array,
    SentRequests: Array
});
module.exports = mongoose.model("friend", FriendsSchema);