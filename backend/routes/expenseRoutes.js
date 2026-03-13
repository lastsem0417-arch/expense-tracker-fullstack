const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");


// ADD EXPENSE
router.post("/add", async(req,res)=>{

try{

const expense = new Expense(req.body)

const saved = await expense.save()

res.json(saved)

}catch(error){

res.status(500).json(error)

}

})


// GET ALL EXPENSES
router.get("/:userId", async(req,res)=>{

try{

const expenses = await Expense.find({
userId:req.params.userId
})

res.json(expenses)

}catch(error){

res.status(500).json(error)

}

})

// UPDATE EXPENSE
router.put("/:id", async (req,res)=>{

try{

const updatedExpense = await Expense.findByIdAndUpdate(

req.params.id,
req.body,
{ new:true }

)

res.json(updatedExpense)

}catch(error){

res.status(500).json(error)

}

})


// DELETE EXPENSE
router.delete("/:id", async (req,res)=>{

try{

await Expense.findByIdAndDelete(req.params.id)

res.json({message:"Expense Deleted"})

}catch(error){

res.status(500).json(error)

}

})


// TOTAL EXPENSE ANALYTICS
router.get("/analytics/total", async (req,res)=>{

try{

const expenses = await Expense.find()

const totalExpense = expenses.reduce(
(sum,item)=> sum + item.amount ,0
)

res.json({totalExpense})

}catch(error){

res.status(500).json(error)

}

})

module.exports = router