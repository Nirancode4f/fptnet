
const Post_comment = require("./Posts_cmt")

var express = require('express');

var router = express.Router();

router.get("/:userId",(req,res)=>{
    res.json({userId: req.params.userId})
})


module.exports = router