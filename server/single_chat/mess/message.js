const router = require("express").Router();
const Message = require("./Messages");
const Conversation = require("../conv/Conversations")
const Users = require("../../user/Users")


//add mess to conv,

router.post("/create", async (req, res) => {
  try {  
    const body = req.body

    const conv = await Conversation.findById(body.conversationId);

    if(!conv){
      return res.status(200).json({success: false, message: "Can't find this conversation"});
    }

    const newMessage = await new Message({conversationId, userId, content} = body);
    await newMessage.save();

    res.status(200).json({success:true, message:"message has been sent", newMessage: newMessage});


  } catch (err) {
    res.status(500).json(err.message);
  }
});

//unsend a message
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
    //Check message owned by this user or not?
    if(Mess.userId != body.userId)
      return res.status(200).json({success: false, message: "You can't delete this message"});
    Mess = await Message.findByIdAndRemove(body.messageId);
    return res.status(200).json({success: true, messages: "Success delete message"});
  }
    catch (err) {
    res.status(500).json(err.message);
  }
});

//get history of conversation 

router.post("/getconv", async (req, res) => {
  const {conversationId} = req.body

  const arr = []
  try {

  await Message.find({conversationId}).then((users)=>{
      users.forEach((user)=>{
        arr.push(user)
      })
    })
    
    res.status(200).json({success: true, messages:"check done" ,arr});
  } catch (err) {
    res.status(500).json(err.message);
  }
});


module.exports = router;
