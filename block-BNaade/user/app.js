const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
var userRoutes = require("./routes/users");
var indexRoutes = require('./routes/index');

//Establishing the  connection between the  application and the server
mongoose.connect("mongodb://localhost/sample", (err) => {
    console.log(err ? "Connection failed" : "Connection made successfully");
});

// all the middelwares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRoutes);
app.use("/users", userRoutes);



// middelwares to handle error 
app.use( (req, res, next )=>{
    res.statusCode(404).send("Page not found");
})

app.use( ( err, req, res, next )=>{
    res.send(err);
} );

// listening the request on the 3k port
app.listen(3000, () => {
    console.log("Server is listening on the port 3k");
});

