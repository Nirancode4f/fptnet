const router = require("express").Router();
const GroupConversation = require("./Conversations");
const GroupMessage = require("../mess/Messages");
const Users = require("../../user/Users");
const { userInfo } = require("os");



//create a conversation and add conversationId to each user
router.post("/create", async (req, res) => {
  try {
    const check = await Users.find({
      _id: {
        $in: req.body.members
      }
    });

    if(check.length != req.body.members.length){
      return res.status(200).json({success: false,message:"Some users not exist!!"});
    }

    const Conv = new GroupConversation({
      name: req.body.name,
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

router.post("/get", async (req, res) => {
  try {
    const body = req.body

    const Conv = await GroupConversation.findById(body.conversationId);

    if(!Conv) return res.status(200).json({success: false, message: "Not exist this GroupConversation!"});

    return res.status(200).json({success: true,message:"Success", conversation: Conv});

  } catch (err) {
    res.status(500).json(err.message);
  }
});

function difference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
      _difference.delete(elem);
  }
  return _difference;
}

//add a some new users to conversation
router.post("/addusers", async (req, res) => {
  try {
    const check = await Users.find({
      _id: {
        $in: req.body.members
      }
    });

    if(check.length != req.body.members.length){
      return res.status(200).json({success: false,message:"Some users not exist!!"});
    }

    Conv = await GroupConversation.findById(req.body.conversationId);

    //find difference of body.members from Conv.members
    set1 = new Set(Conv.members);
    set2 = new Set(req.body.members);
    arr = difference(set2, set1);
    for(let member of arr){
      Conv.members.push(member);
    }

    await Conv.save();

    Conv.save();
    if(!Conv) return res.status(200).json({success: false, message: "GroupConversation not exist!"});
    // add conversationId to userId
    for(let member of arr){
      await Users.findByIdAndUpdate(
        member,
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
      return res.status(200).json({success: false,message:"User not exist!!"});
    }

    return res.status(200).json({success: true, message:"Success", GroupConversations: user.groupconversations});

  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/deleteusers", async (req, res)=>{
  try {
    const body = req.body
    Conv = await GroupConversation.findById(body.conversationId);
    
    if(!Conv) return res.status(200).json({success: false, message: "Not exist this GroupConversation!"});

    let set = new Set(Conv.members);
    
    for(let member of body.members){
      set.delete(member);
    }

    Conv.members = [...set];
    await Conv.save();

    return res.status(200).json({success: true, message:"Success"});

  } catch (err) {
    res.status(500).json(err.message);
  }
})

router.post("/delete", async (req, res)=>{
  try {
    const body = req.body
    await GroupConversation.findByIdAndRemove(body.conversationId);

    await GroupMessage.deleteMany({
      conversationId: body.conversationId
    })

    return res.status(200).json({success: true, message:"Success"});

  } catch (err) {
    res.status(500).json(err.message);
  }
})


module.exports = router;
