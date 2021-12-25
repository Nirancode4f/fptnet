require("dotenv").config();
const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const cors = require("cors")
//import module 
const authRouters = require("./user/auth");
const conversation = require("./single_chat/conv/conversation");
const message = require("./single_chat/mess/message");
const GroupConversation = require("./group_chat/conv/conversation");
const GroupMessage = require("./group_chat/mess/message");
const Post = require("./post/post");
const Comment = require("./post/comment");
const Upload = require("./upload/upload");
const Deadline = require("./deadline/deadline");



//connect to db
const mongoose = require("mongoose");


const url = `mongodb+srv://fpt-network:1234@fpt-network.m8bze.mongodb.net/fpt-network?retryWrites=true&w=majority`;



//function call to mongooseDB
const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Mongoose connected");
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};
connectDB();//run connectdb function



app.get("/",(req,res)=>{
    res.sendFile( "text.txt",{ root : __dirname});
});

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(cors())
app.use("/api/auth", authRouters);
app.use("/api/conversation", conversation);
app.use("/api/message", message);
app.use("/api/group/conversation", GroupConversation);
app.use("/api/group/message", GroupMessage);
app.use("/api/post/", Post);
app.use("/api/comment/", Comment);
app.use("/api/upload", Upload);
app.use("/api/deadline/", Deadline);
app.use("/api/image/", require("./upload/getimage"));


app.listen(PORT, () => console.log(`server started on ${PORT}`));