import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncomeService } from '../services/income.service';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-add-income',
standalone:true,
imports:[FormsModule,CommonModule],
templateUrl:'./add-income.html',
styleUrls:['./add-income.css']
})

export class AddIncomeComponent{

title:string=""
amount:number=0
category:string=""
date:string=""
notes:string=""

successMessage:string=""

constructor(private incomeService:IncomeService){}

addIncome(){

if(!this.title || !this.amount || !this.category){

alert("Please fill all fields")
return

}

const data={

userId:localStorage.getItem("userId"),

title:this.title,
amount:this.amount,
category:this.category,
date:this.date,
notes:this.notes

}

this.incomeService.addIncome(data).subscribe(()=>{

this.successMessage="Income added successfully!"

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