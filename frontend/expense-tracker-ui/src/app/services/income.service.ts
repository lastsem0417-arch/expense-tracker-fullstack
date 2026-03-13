import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn:'root'
})

export class IncomeService{

private api="http://localhost:5000/api/income"

constructor(private http:HttpClient){}

// add income
addIncome(data:any):Observable<any>{

return this.http.post(this.api+"/add",data)

}

// get incomes
getIncome(){

const userId = localStorage.getItem("userId")

return this.http.get(
this.api+"/"+userId
)

}

}