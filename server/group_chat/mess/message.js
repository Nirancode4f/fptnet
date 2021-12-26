const router = require("express").Router();
const Message = require("./Messages");
const Conversation = require("../conv/Conversations")
const Users = require("../../user/Users")


//add mess to conv,

router.post("/create", async (req, res) => { 
  try {  
    const body = req.body
    //check content of message
    if(!body.content) return res.status(200).json({success: false, message: "Must be contain some message"});
    //find Conversation
    const Conv = await Conversation.findById(body.conversationId);
    //Check exist convesation
    if(!Conv) return res.status(200).json({success: false, message: "Not exist this conversation"});
    //Check user is in group or not?
    if(!Conv.members.includes(body.userId))
      return res.status(200).json({success: false, message: "You are not in this group"});

    const Mess = await new Message({
      conversationId: body.conversationId,
      userId: body.userId,
      content: body.content
    });

    await Mess.save();

    return res.status(200).json({success:true ,message: "message has been sent" , MessageId: Mess._id});
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//get all messages of groupconversation
router.post("/get", async (req, res) => {
  try {  
    const body = req.body
    //find Conversation
    const Conv = await Conversation.findById(body.conversationId);
    //Check exist convesation
    if(!Conv) return res.status(200).json({success: false, message: "Not exist this conversation"});
    //Check user is in group or not?
    if(!Conv.members.includes(body.userId))
      return res.status(200).json({success: false, message: "You are not in this group"});
    //Find all messages
    const Mess = await Message.find({
      conversationId: body.conversationId
    });
    return res.status(200).json({success: true, messages: Mess});
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//unsend a groupmessage
router.post("/unsend", async (req, res) => {
  try {  
    const body = req.body
    //find Message
    Mess = await Message.findById(body.messageId);
    //Check exist Message
    if(!Mess) return res.status(200).json({success: false, message: "Not exist this message"});
    //Check message is this user or not?
    if(Mess.userId != body.userId)
      return res.status(200).json({success: false, message: "This message is not owned by you"});
    Mess.unsend = true
    await Mess.save()
    return res.status(200).json({success: true, messages: "Success unsend message"});
  }
    catch (err) {
    res.status(500).json(err.message);
  }
});


//delete a groupmessage
router.post("/delete", async (req, res) => {
  try {  
    const body = req.body
    //find Message
    Mess = await Message.findById(body.messageId);
    //Check exist Message
    if(!Mess) return res.status(200).json({success: false, message: "Not exist this message"});
    //Check message is this user or not?
    if(Mess.userId != body.userId)
      return res.status(200).json({success: false, message: "You can't delete this message"});
    Mess = await Message.findByIdAndRemove(body.messageId);
    return res.status(200).json({success: true, messages: "Success delete message"});
  }
    catch (err) {
    res.status(500).json(err.message);
  }
});


module.exports = router;
