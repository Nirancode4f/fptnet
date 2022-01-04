const mongoose = require("mongoose")

const ConsersationSchema = new mongoose.Schema({
    members: {
        type: Array,
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Conversation", ConsersationSchema)