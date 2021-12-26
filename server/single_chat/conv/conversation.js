const router = require("express").Router();
const Conversation = require("./Conversations");
const Users = require("../../user/Users")



//check conv , if not exists , make one, add to user
router.post("/create", async (req, res) => {
  const Conv = new Conversation({
    members: [req.body.userId, req.body.friendId],
  });
  try {
    const check = await Conversation.findOne({
      members: { $in: [req.body.userId,req.body.friendId] },
    });


    // add conversationId to userId
    if (!check){


      const conv = await Conv.save();

      const user = await Users.findOneAndUpdate({
        _id : `${req.body.userId}`
    },{
      $push :
        {
          conversations: conv._id
        }
    })
    const userz = await Users.findOneAndUpdate({
      _id : `${req.body.friendId}`
  },{
    $push :
      {
        conversations: conv._id
      }
  })

      res.status(200).json({success: true, message:"!!!done!!!", conversationId: conv._id});

    }else{
      res.status(300).json({success: false, message:"conversation exists", conversationId: check._id})
    }

  } catch (err) {
    res.status(500).json(err.message);
  }
});

//get a conv of a user
router.post("/get", async (req, res) => {
  try {
    const body = req.body
    const conv = await Conversation.findById(body.conversationId);

    if(!conv){
      return res.status(200).json({success: false, message: "Can't find this conversation"});
    }

    if(conv.members.includes(body.userId)){
      return res.status(200).json({success: true, conversation: conv});
    }

    return res.status(200).json({success: false, message:"You are not in this conversation"});
  } catch (err) {
    res.status(500).json({success:false, message: "Internal Server Error"});
  }
});


//get all conv of a user

router.post("/getconvs", async (req, res) => {
    const {userId} = req.body
  try {
    const conversation = await Conversation.find({
      members: { $in: [userId] },
    });

    res.status(200).json({success:true,message:"successful " ,conversation: conversation});
  } catch (err) {
    res.status(500).json({success:false, message: "Internal Server Error"});
  }
});


module.exports = router;
