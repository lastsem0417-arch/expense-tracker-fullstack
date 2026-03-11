import { Component, ChangeDetectorRef } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-expense-list',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./expense-list.html',
styleUrls:['./expense-list.css']
})

export class ExpenseListComponent {

expenses:any[]=[]
searchText=""

editingId:any=null
editTitle=""
editAmount=0

constructor(
private expenseService:ExpenseService,
private cd:ChangeDetectorRef
){
this.loadExpenses()
}

loadExpenses(){

this.expenseService.getExpenses().subscribe((data:any)=>{

this.expenses=data

this.cd.detectChanges()

})

}

deleteExpense(id:string){

this.expenseService.deleteExpense(id).subscribe(()=>{

this.loadExpenses()

})

}

startEdit(e:any){

this.editingId=e._id
this.editTitle=e.title
this.editAmount=e.amount

}

saveEdit(id:string){

const data={
title:this.editTitle,
amount:this.editAmount
}

this.expenseService.updateExpense(id,data).subscribe(()=>{

this.editingId=null
this.loadExpenses()

})

}

filteredExpenses(){

return this.expenses.filter((e:any)=>

e.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
e.category.toLowerCase().includes(this.searchText.toLowerCase())

)

}

}