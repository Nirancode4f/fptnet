const router = require("express").Router();
const Users = require("../user/Users");
const Friends = require("./Friends");

router.post("/get", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)

        Fuser = await Friends.findById(user.friends)

        friends = []

        for (var i = 0; i < Fuser.Friends.length; i++) {
            friends.push(await Users.findById(Fuser.Friends[i]))
        }

        return res.status(200).json({ success: true, friends })

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post("/sendreq", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)
        friend = await Users.findById(body.friendId)

        if (!friend) {
            return res.status(200).json({ success: false, message: "Can't find this friend" })
        }

        Fuser = await Friends.findById(user.friends)
        Ffriend = await Friends.findById(friend.friends)

        for (let fri of Fuser.Friends) {
            if (fri == body.friendId) {
                return res.status(200).json({ success: false, message: "have been friends" })
            }
        }

        for (let fri of Fuser.SentRequests) {
            if (fri == body.friendId) {
                return res.status(200).json({ success: false, message: "You have already sent this request" })
            }
        }

        Fuser.SentRequests.push(body.friendId)
        Ffriend.FriendRequests.push(body.userId)

        await Fuser.save()
        await Ffriend.save()

        return res.status(200).json({ success: true })

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post("/unsend", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)
        friend = await Users.findById(body.friendId)

        if (!friend) {
            return res.status(200).json({ success: false, message: "Can't find this friend" })
        }

        Fuser = await Friends.findById(user.friends)
        Ffriend = await Friends.findById(friend.friends)

        //check if have this friend request
        check = false
        for (let fri of Fuser.SentRequests) {
            if (fri == body.friendId) {
                check = true
            }
        }
        if (!check) {
            return res.status(200).json({ success: false, message: "Not have any request to this user" })
        }

        //remove request from list of request
        for (let i = 0; i < Fuser.SentRequests.length; i++) {
            if (Fuser.SentRequests[i] == body.friendId) {
                await Fuser.SentRequests.splice(i, 1)
                break
            }
        }
        for (let i = 0; i < Ffriend.FriendRequests.length; i++) {
            if (Ffriend.FriendRequests[i] == body.userId) {
                await Ffriend.FriendRequests.splice(i, 1)
                break
            }
        }

        await Fuser.save()
        await Ffriend.save()

        return res.status(200).json({ success: true })

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post("/accept", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)
        friend = await Users.findById(body.friendId)

        if (!friend) {
            return res.status(200).json({ success: false, message: "Can't find this friend" })
        }

        Fuser = await Friends.findById(user.friends)
        Ffriend = await Friends.findById(friend.friends)

        //check if have this friend request
        check = false
        for (let fri of Fuser.FriendRequests) {
            if (fri == body.friendId) {
                check = true
            }
        }
        if (!check) {
            return res.status(200).json({ success: false, message: "Not have any request from this user" })
        }

        //remove request from list of request
        for (let i = 0; i < Fuser.FriendRequests.length; i++) {
            if (Fuser.FriendRequests[i] == body.friendId) {
                await Fuser.FriendRequests.splice(i, 1)
                break
            }
        }
        for (let i = 0; i < Ffriend.SentRequests.length; i++) {
            if (Ffriend.SentRequests[i] == body.userId) {
                await Ffriend.SentRequests.splice(i, 1)
                break
            }
        }

        //add to Friends
        Fuser.Friends.push(body.friendId)
        Ffriend.Friends.push(body.userId)

        await Fuser.save()
        await Ffriend.save()

        return res.status(200).json({ success: true })

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post("/decline", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)
        friend = await Users.findById(body.friendId)

        if (!friend) {
            return res.status(200).json({ success: false, message: "Can't find this friend" })
        }

        Fuser = await Friends.findById(user.friends)
        Ffriend = await Friends.findById(friend.friends)

        //check if have this friend request
        check = false
        for (let fri of Fuser.FriendRequests) {
            if (fri == body.friendId) {
                check = true
            }
        }
        if (!check) {
            return res.status(200).json({ success: false, message: "Not have any request from this user" })
        }

        //remove request from list of request
        for (let i = 0; i < Fuser.FriendRequests.length; i++) {
            if (Fuser.FriendRequests[i] == body.friendId) {
                await Fuser.FriendRequests.splice(i, 1)
                break
            }
        }
        for (let i = 0; i < Ffriend.SentRequests.length; i++) {
            if (Ffriend.SentRequests[i] == body.userId) {
                await Ffriend.SentRequests.splice(i, 1)
                break
            }
        }

        await Fuser.save()
        await Ffriend.save()

        return res.status(200).json({ success: true })

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post("/unfriend", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)
        friend = await Users.findById(body.friendId)

        if (!friend) {
            return res.status(200).json({ success: false, message: "Can't find this friend" })
        }

        Fuser = await Friends.findById(user.friends)
        Ffriend = await Friends.findById(friend.friends)

        check = false
        for (let fri of Fuser.Friends) {
            if (fri == body.friendId) {
                check = true
            }
        }
        if (!check) {
            return res.status(200).json({ success: false, message: "not have been friends" })
        }

        //remove friend from list of friend
        for (let i = 0; i < Fuser.Friends.length; i++) {
            if (Fuser.Friends[i] == body.friendId) {
                await Fuser.Friends.splice(i, 1)
                break
            }
        }
        for (let i = 0; i < Ffriend.Friends.length; i++) {
            if (Ffriend.Friends[i] == body.userId) {
                await Ffriend.Friends.splice(i, 1)
                break
            }
        }

        await Fuser.save()
        await Ffriend.save()

        return res.status(200).json({ success: true })

    } catch (err) {
        res.status(500).json(err.message);
    }
})

module.exports = router;