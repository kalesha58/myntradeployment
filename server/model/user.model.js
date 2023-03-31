const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  number: { type: Number, required: true },
  role:{type:Number,default:0}
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
