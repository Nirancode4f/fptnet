
const Post_comment = require("./Posts_cmt");
const Posts = Post_comment.model("post");
const Comments = Post_comment.model("postcomment");
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
        res.status(200).json({success: true});
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;