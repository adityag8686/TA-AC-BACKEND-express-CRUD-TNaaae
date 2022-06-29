const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 18,
  },
  bio: String,
  hobbies: String,
},{timestamp : true});

let User = mongoose.model("User", userSchema);
module.exports = User;