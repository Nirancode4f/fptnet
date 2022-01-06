const mongoose = require("mongoose")

const ConsersationSchema = new mongoose.Schema({
    members: {
        type: Array,
    },
    totalmessages: {
        type: Number,
        default: 0
    },
    createAt: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model("Conversation", ConsersationSchema)