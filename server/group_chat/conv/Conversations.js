const mongoose =require("mongoose");

const ConsersationSchema = new mongoose.Schema(
    {   name:{
        type: String,
        required: true
    },
        members: Array
    }   
);

module.exports = mongoose.model("GroupConversation",ConsersationSchema);