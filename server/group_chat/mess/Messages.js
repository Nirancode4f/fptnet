const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
      index: true,
      require: true
    },
    userId: {
      type: String,
      require: true
    },
    content: {
      type: String
    },
    image: {
      type: String,
    },
    unsend: {
      type: Boolean,
      default: false
    },
    createAt:{
      type: String,
      default: Date.now
    }
  },
  
);

module.exports = mongoose.model("GroupMessage", MessageSchema);
