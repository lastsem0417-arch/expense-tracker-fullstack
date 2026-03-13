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

this.incomes=data

})

}

deleteIncome(id:string){

if(confirm("Delete this income?")){

this.incomeService.deleteIncome(id).subscribe(()=>{

this.loadIncome()

})

}

}

}