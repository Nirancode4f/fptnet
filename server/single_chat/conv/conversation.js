const router = require("express").Router();
const Conversation = require("./Conversations");
const Users = require("../../user/Users")



//check conv , if not exists , make one, add to user
router.post("/", async (req, res) => {
  const Conv = new Conversation({
    members: [req.body.oneId, req.body.twoId],
  });
  try {
    const check = await Conversation.findOne({
      members: { $in: [req.body.oneId,req.body.twoId] },
    });


    // add conversationId to userId
    if (!check){


      const conv = await Conv.save();

      const user = await Users.findOneAndUpdate({
        _id : `${req.body.oneId}`
    },{
      $push :
        {
          conversations: conv._id
        }
    })
    const userz = await Users.findOneAndUpdate({
      _id : `${req.body.twoId}`
  },{
    $push :
      {
        conversations: conv._id
      }
  })




      res.status(200).json({success: true,message:"!!!done!!!"});

    }else{
      res.status(300).json({success: false,message:"conversation exists"})
    }



  } catch (err) {
    res.status(500).json(err.message);
  }
});




//get all conv of a user

router.post("/user/getconv", async (req, res) => {
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
