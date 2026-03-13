import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../services/income.service';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-income-list',
standalone:true,
imports:[CommonModule],
templateUrl:'./income-list.html',
styleUrls:['./income-list.css']
})

export class IncomeListComponent implements OnInit{

incomes:any[]=[]

constructor(private incomeService:IncomeService){}

ngOnInit(){

this.loadIncome()

}

loadIncome(){

this.incomeService.getIncome().subscribe((data:any)=>{

console.log("Income Data:",data)

this.incomes=data

})

}

}