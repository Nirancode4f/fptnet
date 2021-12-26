const Deadlines = require("./Deadlines");
const router = require('express').Router();

router.post("/create", async (req, res)=>{
    try {
        const body = req.body;

        const deadline = await new Deadlines({
            userId: body.userId,
            deadline: body.deadline,
            deadlinedate: body.deadlinedate,
            teacher: body.teacher,
            note: body.note
        }).save();

        res.status(200).json({success: true, deadlineId: deadline._id});
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/get", async (req, res)=>{
    try {
        const deadline = await Deadlines.find({
            userId: req.body.userId
        });
        res.status(200).json({success: true, deadlines: deadline});
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
                userId: body.userId,
                deadline: body.deadline,
                deadlinedate: body.deadlinedate,
                completed: body.completed,
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

        const deadline = await Deadlines.findById(body.deadlineId);
        //Check exist
        if(!deadline){
            return res.status(200).json({success: false, message: "Not exist this deadline!"});
        }
        if(deadline.userId != body.userId){
            return res.status(200).json({success: false, message: "You can't delete this deadline"});
        }
        await Deadlines.findByIdAndRemove(body.deadlineId);

        res.status(200).json({success: true});
    } catch (err) {
        res.status(500).json(err.message);
    }
});


module.exports = router;