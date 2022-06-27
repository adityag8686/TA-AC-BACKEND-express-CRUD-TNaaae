const express = require("express");
const app = express();
const path = require("path");
let userRouter = require("./routes/users");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/users' ,userRouter);

app.use((req,res,next)=>{
    res.send("Page Not Found");
})

app.listen(2000 , ()=>{
    console.log('server is listening on the port 2k ');
})