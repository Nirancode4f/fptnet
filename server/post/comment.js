
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
        const tmp = new Comments({
            user: body.user,
            content: body.content,
            image: body.image
        });
        await tmp.save();
        res.status(200).json({success: true, commentId: tmp._id});
    } catch (err) {
        res.status(500).json(err.message);
    }
});


router.post("/update", async (req, res) => {
    try {
        const body = req.body;
        await Comments.findByIdAndUpdate(body.commentId, {
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
        await Comments.findByIdAndRemove(req.body.commentId);

        res.status(200).json({success: true});
    } catch (err) {
        res.status(500).json(err.message);
    }
});


module.exports = router;