const mongoose = require("mongoose")

const incomeSchema = new mongoose.Schema({

userId:{
type:String,
required:true
},

title:String,

amount:Number,

category:String,

date:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Income",incomeSchema)