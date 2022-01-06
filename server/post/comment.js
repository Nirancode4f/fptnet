const Posts = require("./Posts");
const Comments = require("./Comments");
const Users = require("../user/Users")
const express = require('express');
const router = express.Router();

// router.get("/:userId", (req, res) => {
//     res.json({ userId: req.params.userId });
// });

router.post("/create", async (req, res) => {
    try {
        const body = req.body;
        const tmp = new Comments({
            postId: body.postId,
            userId: body.userId,
            content: body.content,
            image: body.image
        });
        await tmp.save();
        res.status(200).json({ success: true, commentId: tmp._id });
    } catch (err) {
        res.status(500).json(err.message);
    }
});


router.get("/get/:postId/:block/:sorttype", async (req, res) => {
    try {
        params = req.params

        const base = 10

        que = { createAt: -1 }
        if (params.sorttype == 2) {
            que = { like: -1 }
        }
        comments = await Comments.find({
            postId: params.postId
        }).sort(que).skip((params.block - 1) * base).limit(base);

        res.status(200).json({ success: true, comments });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.get("/like/:commentId", async (req, res) => {
    try {
        params = req.params
        body = await req.body

        comment = await Comments.findById(params.commentId)
        if (!comment) {
            return res.status(200).json({ success: false, message: "This comment not exist" });
        }

        user = await Users.findById(body.userId)
        if (!user) {
            return res.status(200).json({ success: false, message: "userId is invalid" });
        }

        if(comment.likelist.includes(body.userId)){
            return res.status(200).json({ success: false, message: "You have already like this comment" });
        }

        comment.likelist.push(body.userId)
        comment.like++
        await comment.save()

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.get("/unlike/:commentId", async (req, res) => {
    try {
        params = req.params
        body = req.body

        comment = await Comments.findById(params.commentId)

        if (!comment) {
            return res.status(200).json({ success: true, message: "This comment not exist" });
        }

        ok = false
        for (var i = 0; i < comment.likelist.length; i++) {
            if (comment.likelist[i] == body.userId) {
                comment.likelist.splice(i, 1);
                ok = true
                break;
            }
        }

        if(ok) comment.like--
        else{
            return res.status(200).json({ success: true, message: "You haven't like this comment yet" });
        }
        await comment.save()

        res.status(200).json({ success: true });
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

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/delete", async (req, res) => {
    try {
        await Comments.findByIdAndRemove(req.body.commentId);

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json(err.message);
    }
});


module.exports = router;