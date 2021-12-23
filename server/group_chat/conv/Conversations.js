const mongoose =require("mongoose");

const ConsersationSchema = new mongoose.Schema(
    {   name:{
        type: String,
        required: true
    },
        members: {
            type: Array,
        },
    }   
);

module.exports = mongoose.model("GroupConversation",ConsersationSchema);