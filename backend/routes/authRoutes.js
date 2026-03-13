const express = require("express")
const router = express.Router()

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

// ================= REGISTER =================

router.post("/register", async (req,res)=>{

try{

const {name,email,password} = req.body

if(!name || !email || !password){
return res.status(400).json({message:"All fields are required"})
}

// email lowercase
const userEmail = email.toLowerCase()

// check existing user
const existingUser = await User.findOne({email:userEmail})

if(existingUser){
return res.status(400).json({message:"User already exists"})
}

// hash password
const hashedPassword = await bcrypt.hash(password,10)

// create user
const user = new User({
name,
email:userEmail,
password:hashedPassword
})

await user.save()

res.json({
message:"User registered successfully"
})

}catch(error){

console.log(error)
res.status(500).json({message:"Server error"})

}

})


// ================= LOGIN =================

router.post("/login", async (req,res)=>{

try{

const {email,password} = req.body

if(!email || !password){
return res.status(400).json({message:"Email and password required"})
}

// lowercase email
const userEmail = email.toLowerCase()

// find user
const user = await User.findOne({email:userEmail})

if(!user){
return res.status(400).json({message:"User not found"})
}

// compare password
const validPassword = await bcrypt.compare(password,user.password)

if(!validPassword){
return res.status(400).json({message:"Invalid password"})
}

// generate token
const token = jwt.sign(
{ id:user._id },
"secretkey",
{ expiresIn:"1d" }
)

// send response
res.json({

token,

user:{
_id:user._id,
name:user.name,
email:user.email
}

})

}catch(error){

console.log(error)
res.status(500).json({message:"Server error"})

}

})

module.exports = router