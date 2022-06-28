const express = require("express");
const User = require("../models/user");
let router = express.Router();

router.get("/new", (req, res) => {
    res.render("userForm");
});

router.post("/", (req, res, next) => {
    console.log(req.body);
    User.create(req.body, (err, userData) => {
        if (err) return res.redirect('/users/new');
        if (userData) return res.redirect('/');
    });
});

module.exports = router;