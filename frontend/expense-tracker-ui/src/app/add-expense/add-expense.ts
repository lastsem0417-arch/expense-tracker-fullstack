import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../services/expense.service';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-add-expense',
standalone:true,
imports:[FormsModule, CommonModule],
templateUrl:'./add-expense.html',
styleUrls:['./add-expense.css']
})

export class AddExpenseComponent {

title=""
amount:number=0
category=""
date=""
notes=""
successMessage=""

constructor(private expenseService:ExpenseService){}

addExpense(){

if(!this.title || !this.amount || !this.category){

alert("Please fill all fields")

return

}

const data={
title:this.title,
amount:this.amount,
category:this.category,
date:this.date,
notes:this.notes
}

this.expenseService.addExpense(data).subscribe(()=>{

this.successMessage="Expense added successfully!"

this.title=""
this.amount=0
this.category=""
this.date=""
this.notes=""

setTimeout(()=>{
this.successMessage=""
},3000)

})

}

}