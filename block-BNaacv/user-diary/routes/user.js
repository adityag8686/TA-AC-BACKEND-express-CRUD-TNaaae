var express = require("express");
var router = express.Router();

router.get("/", (req,res) =>{
    res.render('users',{ list: ["Aditya", "Ravi", "Zehan", "Vasant"] })
})

router.get('/new',(req ,res)=>{
    res.render('userForm');
})

router.get('/:id',(req ,res)=>{
    res.render('singleUser',{ name: "aditya", email: "aditya@altcampus.io" });
})


module.exports = router;