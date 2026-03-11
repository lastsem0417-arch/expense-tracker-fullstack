const express = require("express")
const router = express.Router()

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

// REGISTER

router.post("/register", async(req,res)=>{

try{

const {name,email,password}=req.body

const hashedPassword = await bcrypt.hash(password,10)

const user = new User({
name,
email,
password:hashedPassword
})

await user.save()

res.json({message:"User registered"})

}catch(error){

res.status(500).json(error)

}

})


// LOGIN

router.post("/login", async(req,res)=>{

try{

const {email,password}=req.body

const user = await User.findOne({email})

if(!user){
return res.status(400).json({message:"User not found"})
}

const valid = await bcrypt.compare(password,user.password)

if(!valid){
return res.status(400).json({message:"Invalid password"})
}

const token = jwt.sign(
{id:user._id},
"secretkey"
)

res.json({token})

}catch(error){

res.status(500).json(error)

}

})

module.exports = router