import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class ExpenseService {

private api="http://localhost:5000/api/expenses"

constructor(private http:HttpClient){}

// GET ALL
getExpenses():Observable<any>{

return this.http.get(this.api)

}

// ADD
addExpense(data:any):Observable<any>{

return this.http.post(this.api+"/add",data)

}

// DELETE
deleteExpense(id:string):Observable<any>{

return this.http.delete(this.api+"/"+id)

}

// UPDATE
updateExpense(id:string,data:any):Observable<any>{

return this.http.put(this.api+"/"+id,data)

}

// TOTAL
getTotalExpense():Observable<any>{

return this.http.get(this.api+"/analytics/total")

}

}