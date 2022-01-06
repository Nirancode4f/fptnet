const mongoose = require("mongoose");

const ConsersationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    members: [String],
    picture: {
        type: String
    },
    totalmessages: {
        type: Number,
        default: 0
    },
    createAt: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model("GroupConversation", ConsersationSchema);