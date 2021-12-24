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
            user: body.user,
            content: body.content,
            image: body.image
        });
        await tmp.save();
        res.status(200).json({success: true, postId: tmp._id});
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

        res.status(200).json({success: true});
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/delete", async (req, res) => {
    try {
        const post = await Posts.findById(req.body.postId);

        await Post_comment.deleteMany({
            _id: post.comment
        });

        await Posts.findByIdAndRemove(req.body.postId);

        res.status(200).json({success: true});
    } catch (err) {
        res.status(500).json(err.message);
    }
});


module.exports = router;