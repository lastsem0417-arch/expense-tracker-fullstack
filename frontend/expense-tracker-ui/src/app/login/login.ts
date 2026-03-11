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

constructor(
private authService:AuthService,
private router:Router
){}

login(){

if(!this.email || !this.password){

this.errorMessage="Please enter email and password"
return

}

const data={
email:this.email,
password:this.password
}

this.authService.login(data).subscribe({

next:(res:any)=>{

localStorage.setItem("token",res.token)

// redirect to dashboard
this.router.navigate(['/dashboard'])

},

error:()=>{

this.errorMessage="Invalid email or password"

}

})

}

}