const express = require("express");
const router = express.Router();
const Income = require("../models/Income");

// ADD INCOME
router.post("/add", async (req,res)=>{

try{

const income = new Income(req.body);

const savedIncome = await income.save();

res.json(savedIncome);

}catch(error){

res.status(500).json(error);

}

});

// GET ALL INCOME
router.get("/:userId", async(req,res)=>{

try{

const income = await Income.find({
userId:req.params.userId
})

res.json(income)

}catch(error){

res.status(500).json(error)

}

});

module.exports = router;