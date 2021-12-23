const router = require("express").Router();
const GroupConversation = require("./Conversations");
const Users = require("../../user/Users");
const { userInfo } = require("os");



//create a conversation and add conversationId to each user
router.post("/", async (req, res) => {
  try {
    const check = await Users.find({
      _id: {
        $in: req.body.members
      }
    });

    if(check.length != req.body.members.length){
      return res.status(400).json({success: false,message:"Some users not exist!!"});
    }

    const Conv = new GroupConversation({
      members: req.body.members,
    });

    await Conv.save();
    // add conversationId to userId
    for(let i = 0; i<req.body.members.length; i++){
      await Users.findOneAndUpdate(
        {
          _id: req.body.members[i]
        },
        {
          $push: {
            groupconversations: Conv._id
          }
        }
      );
    }

    return res.status(200).json({success: true,message:"Success", conversationId: Conv._id});

  } catch (err) {
    res.status(500).json(err.message);
  }
});



//add a some new users to conversation
router.post("/addusers", async (req, res) => {
  try {
    const check = await Users.find({
      _id: {
        $in: req.body.members
      }
    });

    if(check.length != req.body.members.length){
      return res.status(400).json({success: false,message:"Some users not exist!!"});
    }

    const Conv = await GroupConversation.findOneAndUpdate({
      _id: req.body.conversationId
    }, {
      $push: {
        members: req.body.members
      }
    });

    // add conversationId to userId
    for(let i = 0; i<req.body.members.length; i++){
      await Users.findOneAndUpdate(
        {
          _id: req.body.members[i]
        },
        {
          $push: {
            groupconversations: Conv._id
          }
        }
      );
    }

    return res.status(200).json({success: true,message:"Success"});

  } catch (err) {
    res.status(500).json(err.message);
  }
});


//get all conversation
router.post("/getconvs", async (req, res) => {
  try {
    const user = await Users.findOne({
      _id: {
        $in: req.body.userId
      }
    });

    if(!user){
      return res.status(400).json({success: false,message:"User not exist!!"});
    }

    return res.status(200).json({success: true, message:"Success", GroupConversations: user.groupconversations});

  } catch (err) {
    res.status(500).json(err.message);
  }
});


module.exports = router;
