import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { IncomeService } from '../services/income.service';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
selector:'app-dashboard',
standalone:true,
imports:[CommonModule],
templateUrl:'./dashboard.html',
styleUrls:['./dashboard.css']
})

export class DashboardComponent implements OnInit{

totalExpense=0
totalIncome=0
savings=0

expenseCount=0
recentExpenses:any[]=[]

budget:number=10000
remaining:number=0
progress:number=0

categoryChart:any
monthlyChart:any

constructor(
private expenseService:ExpenseService,
private incomeService:IncomeService,
private router:Router
){}

ngOnInit(){

this.loadDashboard()

this.router.events.subscribe(event=>{
if(event instanceof NavigationEnd){
this.loadDashboard()
}
})

}

loadDashboard(){

// EXPENSE DATA
this.expenseService.getExpenses().subscribe((data:any)=>{

this.expenseCount=data.length
this.recentExpenses=data.slice(0,5)

let total=0

const categories:any={}
const months=new Array(12).fill(0)

data.forEach((e:any)=>{

total+=e.amount

categories[e.category]=(categories[e.category]||0)+e.amount

const month=new Date(e.date).getMonth()
months[month]+=e.amount

})

this.totalExpense=total

this.remaining=this.budget-this.totalExpense
this.progress=(this.totalExpense/this.budget)*100

this.createCategoryChart(categories)
this.createMonthlyChart(months)

this.updateSavings()

})

// INCOME DATA
this.incomeService.getIncome().subscribe((data:any)=>{

this.totalIncome=data.reduce(
(sum:any,i:any)=>sum+i.amount,0
)

this.updateSavings()

})

}

updateSavings(){

this.savings=this.totalIncome-this.totalExpense

}

createCategoryChart(categories:any){

if(this.categoryChart){
this.categoryChart.destroy()
}

const labels=Object.keys(categories)
const values=Object.values(categories)

this.categoryChart=new Chart("expenseChart",{

type:'pie',

data:{
labels:labels,
datasets:[{
data:values
}]
}

})

}

createMonthlyChart(months:any){

const canvas:any = document.getElementById("monthlyChart")

if(!canvas){
return
}

if(this.monthlyChart){
this.monthlyChart.destroy()
}

this.monthlyChart=new Chart(canvas,{

type:'bar',

data:{
labels:[
'Jan','Feb','Mar','Apr','May','Jun',
'Jul','Aug','Sep','Oct','Nov','Dec'
],

datasets:[{

label:'Monthly Expense',
data:months,
backgroundColor:'#4caf50'

}]

}

})

}

}