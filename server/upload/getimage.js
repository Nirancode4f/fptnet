const express = require('express');
const path = require("path");
const fs = require('fs');
const router = express.Router();

router.get("/:Image", (req, res)=>{
    tmp = path.resolve(__dirname + '/../public/images/' + req.params.Image);

    try {
        if (fs.existsSync(tmp)) {
            res.sendFile(tmp);
        }else{
            res.json("Not exist this image");
        }
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;