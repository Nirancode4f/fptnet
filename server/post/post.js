const Posts = require("./Posts");
const Comments = require("./Comments");
const express = require('express');
const router = express.Router();

// router.get("/:userId", (req, res) => {
//     res.json({ userId: req.params.userId });
// });

router.post("/create", async (req, res) => {
    try {
        const body = req.body;
        const tmp = new Posts({
            user,
            content,
            image
        } = body);
        await tmp.save();
        res.status(200).json({ success: true, postId: tmp._id });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/get", async (req, res) => {
    try {
        const post = await Posts.findById(req.body.postId);
        res.status(200).json({ success: true, post: post });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/getposts", async (req, res) => {
    try {
        //number of posts per block
        const base = 10

        body = await req.body
        const post = await Posts.find({
            userId: body.userId
        }).sort({
            createAt: -1
        }).skip((body.block - 1) * base).limit(base)

        if(!post){
            return res.status(200).json({ success: false, message: "Not exist this block"});
        }

        res.status(200).json({ success: true, post: post });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/update", async (req, res) => {
    try {
        const body = req.body;
        await Posts.findByIdAndUpdate(body.postId, {
            $set: {
                content: body.content,
                image: body.image
            }
        });

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/delete", async (req, res) => {
    try {
        const post = await Posts.findById(req.body.postId);

        await Comments.deleteMany({
            post: req.body.postId
        });

        await Posts.findByIdAndRemove(req.body.postId);

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json(err.message);
    }
});


module.exports = router;