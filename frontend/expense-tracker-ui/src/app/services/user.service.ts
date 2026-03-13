import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn:'root'
})

export class UserService{

api="http://localhost:5000/api/user"

constructor(private http:HttpClient){}

getProfile(id:any){

return this.http.get(this.api+"/profile/"+id)

}

updateProfile(id:any,data:any){

return this.http.put(this.api+"/profile/"+id,data)

}

}