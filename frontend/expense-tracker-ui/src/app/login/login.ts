import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
selector:'app-login',
standalone:true,
imports:[FormsModule,CommonModule],
templateUrl:'./login.html',
styleUrls:['./login.css']
})

export class LoginComponent{

email:string=""
password:string=""
errorMessage:string=""
loading:boolean=false

constructor(
private authService:AuthService,
private router:Router
){}

login(){

if(!this.email || !this.password){

this.errorMessage="Please enter email and password"
return

}

this.loading=true

const data={
email:this.email,
password:this.password
}

this.authService.login(data).subscribe({

next:(res:any)=>{

this.loading=false

// save token
localStorage.setItem("token",res.token)

// save userId for profile
localStorage.setItem("userId",res.user._id)

// optional save name
localStorage.setItem("userName",res.user.name)

// redirect
this.router.navigate(['/dashboard'])

},

error:(err)=>{

this.loading=false

if(err.status===401){

this.errorMessage="Invalid email or password"

}else{

this.errorMessage="Server error. Please try again."

}

}

})

}

}   