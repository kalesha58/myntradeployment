
const express=require("express");

const { registerUser, loginUser, getAllUser, getSingleUser, deleteUser } = require("../controller/user.controller");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");


const userRouter=express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/:id", requireSignIn , isAdmin, getSingleUser)
userRouter.get("/allusers",requireSignIn , isAdmin,getAllUser)
userRouter.delete("/:id",requireSignIn , isAdmin,deleteUser)
module.exports=userRouter