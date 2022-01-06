const router = require("express").Router();
const Users = require("../user/Users");

router.get("/teachers", async (req, res) => {
    try {

        let unwrap = ({ _id, email, username, clubs, major, picture }) => ({ _id, email, username, clubs, major, picture });

        user = await Users.find({
            student: false
        })

        teachers = []
        for (var i = 0; i < user.length; i++) {
            teachers.push(unwrap(user[i]))
        }

        return res.status(200).json({ success: true, teachers })

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.get("/getinfo/:userId", async (req, res) => {
    try {
        body = await req.body
        params = req.params
        user = await Users.findById(params.userId)

        if(!user){
            return res.status(200).json({ success: false, message: "can't find this user" })
        }

        let unwrap = ({_id, email, username, clubs, major, picture}) => ({_id, email, username, clubs, major, picture});

        return res.status(200).json({ success: true, user: unwrap(user) })

    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post("/edit", async (req, res) => {
    try {
        body = req.body

        // delete body.student

        //check username
        if (body.username) {
            username = await Users.find({
                username: body.username
            })

            if (username) {
                return res.status(200).json({ success: false, message: "username have already exist" })
            }
        }

        user = await Users.findByIdAndUpdate(body.userId, {
            $set: {
                username,
                picture,
                student,
                clubs,
                major,
                slogan
            } = body

        })

        return res.status(200).json({ success: true, user })

    } catch (err) {
        res.status(500).json(err.message);
    }
})

module.exports = router;