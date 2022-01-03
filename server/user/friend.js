const router = require("express").Router();
const Users = require("../user/Users");

router.post("/get", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)

        friends = []

        for (var i = 0; i < user.friendlist.Friends.length; i++) {
            friends.push(await Users.findById(user.friendlist.Friends[i]))
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

        for (let fri of user.friendlist.Friends) {
            if (fri == body.friendId) {
                return res.status(200).json({ success: false, message: "have been friends" })
            }
        }

        for (let fri of user.friendlist.SentRequests) {
            if (fri == body.friendId) {
                return res.status(200).json({ success: false, message: "You have already sent this request" })
            }
        }

        user.friendlist.SentRequests.push(body.friendId)
        friend.friendlist.FriendRequests.push(body.userId)

        await user.save()
        await friend.save()

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

        //check if have this friend request
        check = false
        for (let fri of user.friendlist.SentRequests) {
            if (fri == body.friendId) {
                check = true
            }
        }
        if (!check) {
            return res.status(200).json({ success: false, message: "Not have any request to this user" })
        }

        //remove request from list of request
        for (let i = 0; i < user.friendlist.SentRequests.length; i++) {
            if (user.friendlist.SentRequests[i] == body.friendId) {
                await user.friendlist.SentRequests.splice(i, 1)
                break
            }
        }
        for (let i = 0; i < friend.friendlist.FriendRequests.length; i++) {
            if (friend.friendlist.FriendRequests[i] == body.userId) {
                await friend.friendlist.FriendRequests.splice(i, 1)
                break
            }
        }

        await user.save()
        await friend.save()

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

        //check if have this friend request
        check = false
        for (let fri of user.friendlist.FriendRequests) {
            if (fri == body.friendId) {
                check = true
            }
        }
        if (!check) {
            return res.status(200).json({ success: false, message: "Not have any request from this user" })
        }

        //remove request from list of request
        for (let i = 0; i < user.friendlist.FriendRequests.length; i++) {
            if (user.friendlist.FriendRequests[i] == body.friendId) {
                await user.friendlist.FriendRequests.splice(i, 1)
                break
            }
        }
        for (let i = 0; i < friend.friendlist.SentRequests.length; i++) {
            if (friend.friendlist.SentRequests[i] == body.userId) {
                await friend.friendlist.SentRequests.splice(i, 1)
                break
            }
        }

        //add to Friends
        user.friendlist.Friends.push(body.friendId)
        friend.friendlist.Friends.push(body.userId)

        await user.save()
        await friend.save()

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

        //check if have this friend request
        check = false
        for (let fri of user.friendlist.FriendRequests) {
            if (fri == body.friendId) {
                check = true
            }
        }
        if (!check) {
            return res.status(200).json({ success: false, message: "Not have any request from this user" })
        }

        //remove request from list of request
        for (let i = 0; i < user.friendlist.FriendRequests.length; i++) {
            if (user.friendlist.FriendRequests[i] == body.friendId) {
                await user.friendlist.FriendRequests.splice(i, 1)
                break
            }
        }
        for (let i = 0; i < friend.friendlist.SentRequests.length; i++) {
            if (friend.friendlist.SentRequests[i] == body.userId) {
                await friend.friendlist.SentRequests.splice(i, 1)
                break
            }
        }

        await user.save()
        await friend.save()

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

        check = false
        for (let fri of user.friendlist.Friends) {
            if (fri == body.friendId) {
                check = true
            }
        }
        if (!check) {
            return res.status(200).json({ success: false, message: "not have been friends" })
        }

        //remove friend from list of friend
        for (let i = 0; i < user.friendlist.Friends.length; i++) {
            if (user.friendlist.Friends[i] == body.friendId) {
                await user.friendlist.Friends.splice(i, 1)
                break
            }
        }
        for (let i = 0; i < friend.friendlist.Friends.length; i++) {
            if (friend.friendlist.Friends[i] == body.userId) {
                await friend.friendlist.Friends.splice(i, 1)
                break
            }
        }

        await user.save()
        await friend.save()

        return res.status(200).json({ success: true })

    } catch (err) {
        res.status(500).json(err.message);
    }
})

module.exports = router;