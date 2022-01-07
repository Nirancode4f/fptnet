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
        body = req.body;

        const tmp = new Posts({
            userId,
            content,
            image
        } = body);

        await tmp.save();

        user = await Users.findById(tmp.userId)
        user.totalposts++
        await user.save()

        res.status(200).json({ success: true, postId: tmp._id });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.get("/get/:postId", async (req, res) => {
    try {
        const post = await Posts.findById(req.params.postId);
        res.status(200).json({ success: true, post: post });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/like", async (req, res) => {
    try {
        params = req.params
        body = await req.body

        post = await Posts.findById(body.postId)
        if (!post) {
            return res.status(200).json({ success: false, message: "This post not exist" });
        }

        user = await Users.findById(body.userId)
        if (!user) {
            return res.status(200).json({ success: false, message: "userId is invalid" });
        }

        if(post.likelist.includes(body.userId)){
            return res.status(200).json({ success: false, message: "You have already like this post" });
        }

        post.likelist.push(body.userId)
        post.like++
        await post.save()

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/unlike", async (req, res) => {
    try {
        params = req.params
        body = req.body

        post = await Posts.findById(body.postId)

        if (!post) {
            return res.status(200).json({ success: true, message: "This post not exist" });
        }

        ok = false
        for (var i = 0; i < post.likelist.length; i++) {
            if (post.likelist[i] == body.userId) {
                post.likelist.splice(i, 1);
                ok = true
                break;
            }
        }

        if(ok) post.like--
        else{
            return res.status(200).json({ success: true, message: "You haven't like this post yet" });
        }
        await post.save()

        res.status(200).json({ success: true });
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
        }).skip((body.block - 1) * base).limit(base);
        
        for(let i = 0; i<post.length; i++){
            post[i]['comments'] = await Comments.find({
                postId: post[i]._id
            });
        }

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
        body = req.body
        const post = await Posts.findById(req.body.postId);

        if(!post){
            return res.status(200).json({ success: false, message: "Can't find this post" });
        }

        if(post.userId != body.userId){
            return res.status(200).json({ success: false, message: "You can't delete this post" });
        }

        user = await Users.findById(post.userId)
        user.totalposts--
        await user.save()

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