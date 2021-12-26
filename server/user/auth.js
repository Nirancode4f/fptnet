

require("dotenv").config()
var express = require('express');

var router = express.Router();

const bcrypt = require('bcrypt');
const User = require("./Users")
const jwt = require("jsonwebtoken");

const saltRounds = 10
//route post /api/auth/register
//desc register user
//access public


router.post("/register", async(req, res) => {
    const {email, username, password } = req.body



    if (!email || !username || !password) {
        return res.status(400).json({ success: false, message: "Missing email or username or password" })

    }

    try { //checkuser

        const emailcheck = await User.findOne({ email })
        if(emailcheck){
            return res.status(400).json({success: false, message:"email already taken"})
        }


        bcrypt.genSalt(saltRounds,async function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {

        const newUser = new User({email,username ,password: hash})

        await newUser.save()
  
        
        return res.status(200).json({success: true,message:"User Created successfully",pass: newUser.password})



    });
});    

    } catch (error) {
        res.json({success: false,message:error.message})
    }
})


//route post /api/auth/login
//desc login user
//access public

router.post("/login", async(req, res) => {

    const {email, password } = req.body

    if (!email || !password) {
        return res.status(200).json({ success: false, message: "Missing email or password" })
    }
    try { //checkuser
        const user = await User.findOne({ email })
        if(!user){
            return res.status(200).json({success: false, message:"User does not exist"})
        }

        //validate 
        const bcryptpassword = await bcrypt.compare(password,user.password)

        if(!bcryptpassword){
            return res.status(200).json({success: false, message: "wrong password or email"})
        }    


        const accessToken = jwt.sign({userId: user._id},process.env.ACCESS_TOKEN_SECRET)

        const decode = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

        res.status(200).json({success: true, message: "successfully",userId: decode.userId,accessToken})


    } catch (error) {
        res.json({success: false,message: error})
    }
})

module.exports = router