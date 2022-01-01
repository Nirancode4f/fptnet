const router = require("express").Router();
const Users = require("./Users");

router.post("/sendreq", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)
        friend = await Users.findById(body.friendId)
        
        if(!friend){
            return res.status(200).json({success: false, message: "Can't find this friend"})
        }

        for(let fri of user.Friends){
            if(fri == body.friendId){
                return res.status(200).json({success: false, message: "have been friends"})
            }
        }

        for(let fri of user.SentRequests){
            if(fri == body.friendId){
                return res.status(200).json({success: false, message: "You have already sent this request"})
            }
        }

        user.SentRequests.push(body.friendId)
        friend.FriendRequests.push(body.userId)

        await user.save()
        await friend.save()

        return res.status(200).json({success: true})

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post("/unsend", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)
        friend = await Users.findById(body.friendId)
        
        if(!friend){
            return res.status(200).json({success: false, message: "Can't find this friend"})
        }

        //check if have this friend request
        check = false
        for(let fri of user.SentRequests){
            if(fri == body.friendId){
                check = true
            }
        }
        if(!check){
            return res.status(200).json({success: false, message: "Not have any request to this user"})
        }

        //remove request from list of request
        for(let i = 0; i<user.SentRequests.length; i++){
            if(user.SentRequests[i] == body.friendId){
                await user.SentRequests.splice(i, 1)
                break
            }
        }
        for(let i = 0; i<friend.FriendRequests.length; i++){
            if(friend.FriendRequests[i] == body.userId){
                await friend.FriendRequests.splice(i, 1)
                break
            }
        }

        await user.save()
        await friend.save()

        return res.status(200).json({success: true})

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post("/accept", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)
        friend = await Users.findById(body.friendId)
        
        if(!friend){
            return res.status(200).json({success: false, message: "Can't find this friend"})
        }

        //check if have this friend request
        check = false
        for(let fri of user.FriendRequests){
            if(fri == body.friendId){
                check = true
            }
        }
        if(!check){
            return res.status(200).json({success: false, message: "Not have any request from this user"})
        }

        //remove request from list of request
        for(let i = 0; i<user.FriendRequests.length; i++){
            if(user.FriendRequests[i] == body.friendId){
                await user.FriendRequests.splice(i, 1)
                break
            }
        }
        for(let i = 0; i<friend.SentRequests.length; i++){
            if(friend.SentRequests[i] == body.userId){
                await friend.SentRequests.splice(i, 1)
                break
            }
        }

        //add to Friends
        user.Friends.push(body.friendId)
        friend.Friends.push(body.userId)

        await user.save()
        await friend.save()

        return res.status(200).json({success: true})

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post("/decline", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)
        friend = await Users.findById(body.friendId)
        
        if(!friend){
            return res.status(200).json({success: false, message: "Can't find this friend"})
        }

        //check if have this friend request
        check = false
        for(let fri of user.FriendRequests){
            if(fri == body.friendId){
                check = true
            }
        }
        if(!check){
            return res.status(200).json({success: false, message: "Not have any request from this user"})
        }

        //remove request from list of request
        for(let i = 0; i<user.FriendRequests.length; i++){
            if(user.FriendRequests[i] == body.friendId){
                await user.FriendRequests.splice(i, 1)
                break
            }
        }
        for(let i = 0; i<friend.SentRequests.length; i++){
            if(friend.SentRequests[i] == body.userId){
                await friend.SentRequests.splice(i, 1)
                break
            }
        }

        await user.save()
        await friend.save()

        return res.status(200).json({success: true})

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post("/unfriend", async (req, res) => {
    try {
        body = await req.body
        user = await Users.findById(body.userId)
        friend = await Users.findById(body.friendId)
        
        if(!friend){
            return res.status(200).json({success: false, message: "Can't find this friend"})
        }

        check = false
        for(let fri of user.Friends){
            if(fri == body.friendId){
                check = true
            }
        }
        if(!check){
            return res.status(200).json({success: false, message: "not have been friends"})
        }

        //remove friend from list of friend
        for(let i = 0; i<user.Friends.length; i++){
            if(user.Friends[i] == body.friendId){
                await user.Friends.splice(i, 1)
                break
            }
        }
        for(let i = 0; i<friend.Friends.length; i++){
            if(friend.Friends[i] == body.userId){
                await friend.Friends.splice(i, 1)
                break
            }
        }

        await user.save()
        await friend.save()

        return res.status(200).json({success: true})

    } catch (err) {
        res.status(500).json(err.message);
    }
})

module.exports = router;