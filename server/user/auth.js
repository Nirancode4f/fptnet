
require("dotenv").config()
var express = require('express');

var router = express.Router();

const bcrypt = require('bcrypt');
const User = require("./Users")
const jwt = require("jsonwebtoken");

const saltRounds = 10


const CLIENT_ID = process.env.CLIENT_ID || "368976437444-75mt0ttcg9i22emoapjf8ensoj6n18p3.apps.googleusercontent.com"
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID)

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

        var newUser = await new User({email, username ,password: hash})
        
        await newUser.save()
  
        return res.status(200).json({success: true,message:"User Created successfully", user: newUser, userId: newUser._id})
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

        res.status(200).json({success: true, message: "successfully", user, accessToken})


    } catch (error) {
        res.json({success: false,message: error})
    }
})

/// gg login

router.post("/gg-login", async(req, res) => {

    const {token} = req.body
    const ticket = await client.verifyIdToken({
        idToken:token,
        audience:  CLIENT_ID
    });
    console.log(ticket)

    const email = ticket.payload.email

    try { 
      //checkuser

        var user = await User.findOne( {email})
        if(user){
           
               

        const checkuser = await User.findOne({email})

        const accessToken = await jwt.sign({userId: checkuser._id},process.env.ACCESS_TOKEN_SECRET)


        return res.json({
          success: true,
          message: checkuser,
          accessToken:accessToken,
          })


        }
        ///save if no login before
        const newuser = new User({
            email: ticket.payload.email,
            username: ticket.payload.given_name,
            picture: ticket.payload.picture,
            })

        await newuser.save()
          



    } catch (error) {
        res.json({success: false,message:error.message})
    }

 
})




module.exports = router