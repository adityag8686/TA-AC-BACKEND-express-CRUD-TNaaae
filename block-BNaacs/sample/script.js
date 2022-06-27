var express = require("express");
var app = express();
var path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "view"))


app.use((req,res,next) => {
    res.locals.name = "Hey This is Aditya";
    next();
});
app.get("/", (req,res)=>{
    res.render("school");
});

app.use( ( req, res, next )=>{
    res.send("Page Not Found");
} );

app.listen(2000, () => {
    console.log("Server is running on the port 2000");
});