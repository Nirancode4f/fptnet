const mongoose =require("mongoose")

const ConsersationSchema = new mongoose.Schema(
    {
    members:{
        type: Array,
    },
}
    
)

module.exports = mongoose.model("Conversation",ConsersationSchema)