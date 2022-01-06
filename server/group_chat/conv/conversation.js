const router = require("express").Router();
const GroupConversation = require("./Conversations");
const GroupMessage = require("../mess/Messages");
const Users = require("../../user/Users");
const { userInfo } = require("os");
const Conversations = require("./Conversations");



//create a conversation and add conversationId to each user
router.post("/create", async (req, res) => {
  try {
    const check = await Users.find({
      _id: {
        $in: req.body.members
      }
    });

    if (check.length != req.body.members.length) {
      return res.status(200).json({ success: false, message: "Some users not exist!!" });
    }

    const Conv = new GroupConversation({
      name: req.body.name,
      members: req.body.members,
    });
    await Conv.save();
    // add conversationId to userId
    for (let i = 0; i < req.body.members.length; i++) {
      user = await Users.findById(req.body.member[i])
      user.chatlist.groupconversations.push(Conv._id)
      await user.save()
    }

    return res.status(200).json({ success: true, message: "Success", conversationId: Conv._id });

  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/edit", async (req, res) => {
  try {
    body = req.body

    conv = await Conversations.findById(body.conversationId)

    if (!conv) {
      return res.status(200).json({ success: false, message: "Not exist this conversation" });
    }

    if (!conv.members.includes(body.userId)) {
      return res.status(200).json({ success: false, message: "You can't edit this conversation" });
    }

    await Conversations.findByIdAndUpdate(body.conversationId,
      {
        $set: {
          name: body.name,
          picture: body.picture
        }
      });

    const conversation = await Conversations.findById(body.conversationId);

    return res.status(200).json({ success: true, message: "Success", conversation });

  } catch (err) {
    res.status(500).json(err.message);
  }
});

//get information of a groupconveration
router.post("/get", async (req, res) => {
  try {
    const body = req.body

    const Conv = await GroupConversation.findById(body.conversationId);

    if (!Conv) return res.status(200).json({ success: false, message: "Not exist this GroupConversation!" });

    return res.status(200).json({ success: true, message: "Success", conversation: Conv });

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

    if (check.length != req.body.members.length) {
      return res.status(200).json({ success: false, message: "Some users not exist!!" });
    }

    Conv = await GroupConversation.findById(req.body.conversationId);

    //find difference of body.members from Conv.members
    set1 = new Set(Conv.members);
    set2 = new Set(req.body.members);
    arr = difference(set2, set1);
    for (let member of arr) {
      Conv.members.push(member);
    }

    await Conv.save();

    Conv.save();
    if (!Conv) return res.status(200).json({ success: false, message: "GroupConversation not exist!" });
    // add conversationId to userId
    for (let member of arr) {
      user = await Users.findById(member)
      user.chatlist.groupconversations.push(Conv._id)
      await user.save()
    }

    return res.status(200).json({ success: true, message: "Success" });

  } catch (err) {
    res.status(500).json(err.message);
  }
});


//get all conversations of a user
router.post("/getconvs", async (req, res) => {
  try {
    body = req.body

    user = await Users.findById(body.userId)

    conversations = []

    for(conversationId of user.chatlist.groupconversations){
      conv = await Conversations.findById(conversationId)
      if(!conv) continue;
      conversations.push(conv)
    }

    return res.status(200).json({ success: true, conversations });

  } catch (err) {
    res.status(500).json(err.message);
  }
});

//delete some users in a groupconveration
router.post("/deleteusers", async (req, res) => {
  try {
    const body = req.body
    Conv = await GroupConversation.findById(body.conversationId);

    if (!Conv) return res.status(200).json({ success: false, message: "Not exist this GroupConversation!" });

    let set = new Set(Conv.members);

    for (let member of body.members) {
      set.delete(member);
    }

    Conv.members = [...set];
    await Conv.save();

    return res.status(200).json({ success: true, message: "Success" });

  } catch (err) {
    res.status(500).json(err.message);
  }
})

//delete a groupconversation and all of its message
router.post("/delete", async (req, res) => {
  try {
    const body = req.body
    await GroupConversation.findByIdAndRemove(body.conversationId);

    //delete all message
    await GroupMessage.deleteMany({
      conversationId: body.conversationId
    })

    return res.status(200).json({ success: true, message: "Success" });

  } catch (err) {
    res.status(500).json(err.message);
  }
})


module.exports = router;
