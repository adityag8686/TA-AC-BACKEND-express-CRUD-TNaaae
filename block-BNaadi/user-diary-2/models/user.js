const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    age: {
        type: Number,
        default: 18,
    },
    bio: String,
});

const User = mongoose.model('User',userSchema)
module.exports = User;