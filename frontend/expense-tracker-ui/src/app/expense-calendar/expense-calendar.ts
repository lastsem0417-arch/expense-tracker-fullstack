import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
selector:'app-expense-calendar',
standalone:true,
imports:[CommonModule,FullCalendarModule],
templateUrl:'./expense-calendar.html',
styleUrls:['./expense-calendar.css']
})

export class ExpenseCalendarComponent implements OnInit{

calendarOptions:any

constructor(private expenseService:ExpenseService){}

ngOnInit(){

this.loadExpenses()

}

loadExpenses(){

this.expenseService.getExpenses().subscribe((data:any)=>{

const events=data.map((e:any)=>{

return{

title:`₹${e.amount} - ${e.category}`,
date:e.date

}

})

this.calendarOptions={

plugins:[dayGridPlugin],

initialView:'dayGridMonth',

events:events

}

})

}

}