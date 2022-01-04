const router = require("express").Router();
const Users = require("../user/Users");

router.get("/teachers", async (req, res) => {
    try {

        let unwrap = ({_id, email, username, clubs, major, picture}) => ({_id, email, username, clubs, major, picture});

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

module.exports = router;