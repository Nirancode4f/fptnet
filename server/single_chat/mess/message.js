const router = require("express").Router();
const Message = require("./Messages");
const conversation = require("../conv/Conversations")
const Users = require("../../user/Users")


//add mess to conv,

router.post("/", async (req, res) => {
  const {conversationId,sender,text} = req.body
 
  try {  
    // find the conv 
    const conv = await Users.find({
    _id: `${sender}`,
    conversations: { $in: [conversationId] }})    


    if(!conversationId || !sender ){
      res.status(400).json({success: false,message:"No empty conversationId/sender"})
    }
  

    if (!conv){
      res.status(400).json({success: false, message: "unfound conversationId or senderid"})
    }


    const newMessage = new Message({conversationId,sender,text});
    await newMessage.save();

    res.status(200).json({success:true ,message:"message has been sent" ,newMessage: newMessage});


  } catch (err) {
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
