const express = require("express")
const router = express.Router()

const User = require("../models/User")

// GET PROFILE

router.get("/profile/:id", async(req,res)=>{

try{

const user = await User.findById(req.params.id)

res.json(user)

}catch(error){

res.status(500).json(error)

}

})

// UPDATE PROFILE

router.put("/profile/:id", async(req,res)=>{

try{

const user = await User.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
)

res.json(user)

}catch(error){

res.status(500).json(error)

}

})

module.exports = router