import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ExpenseService } from '../services/expense.service';
import { IncomeService } from '../services/income.service';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-profile',
standalone:true,
imports:[FormsModule,CommonModule],
templateUrl:'./profile.html',
styleUrls:['./profile.css']
})

export class ProfileComponent implements OnInit{

name=""
email=""
userId=""

totalExpense=0
totalIncome=0
savings=0

constructor(
private userService:UserService,
private expenseService:ExpenseService,
private incomeService:IncomeService
){}

ngOnInit(){

this.userId = localStorage.getItem("userId") || ""

this.loadProfile()
this.loadStats()

}

loadProfile(){

this.userService.getProfile(this.userId).subscribe((data:any)=>{

this.name=data.name
this.email=data.email

})

}

loadStats(){

// expenses
this.expenseService.getExpenses().subscribe((data:any)=>{

let total=0

data.forEach((e:any)=>{
total+=e.amount
})

this.totalExpense=total
this.calculateSavings()

})

// income
this.incomeService.getIncome().subscribe((data:any)=>{

let total=0

data.forEach((i:any)=>{
total+=i.amount
})

this.totalIncome=total
this.calculateSavings()

})

}

calculateSavings(){

this.savings=this.totalIncome-this.totalExpense

}

updateProfile(){

const data={
name:this.name,
email:this.email
}

this.userService.updateProfile(this.userId,data).subscribe(()=>{

alert("Profile Updated Successfully")

})

}

}