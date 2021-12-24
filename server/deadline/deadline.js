const Deadlines = require("./Deadlines");
const router = require('express').Router();

router.post("/", async (req, res)=>{
    try {
        const body = req.body;

        await new Deadlines({
            user: body.user,
            deadline: body.deadline,
            deadlinedate: body.deadlinedate,
            teacher: body.teacher,
            note: body.note
        }).save();
        res.status(200).json({success: true});
    } catch (err) {
        res.status(500).json(err.message);
    }
});


router.post("/update", async (req, res)=>{
    try {
        const body = req.body;

        await Deadlines.findOneAndUpdate({
            _id: body.deadlineId
        }, {
            $set: {
                user: body.user,
                deadline: body.deadline,
                deadlinedate: body.deadlinedate,
                teacher: body.teacher,
                note: body.note
            }
        });
        res.status(200).json({success: true});
    } catch (err) {
        res.status(500).json(err.message);
    }
});


router.post("/delete", async (req, res)=>{
    try {
        const body = req.body;

        await Deadlines.findByIdAndRemove(body.deadlineId);

        res.status(200).json({success: true});
    } catch (err) {
        res.status(500).json(err.message);
    }
});


module.exports = router;