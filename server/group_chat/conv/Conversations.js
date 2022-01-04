const mongoose = require("mongoose");

const ConsersationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    members: Array,
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("GroupConversation", ConsersationSchema);