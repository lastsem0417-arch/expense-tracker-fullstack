import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
selector:'app-register',
standalone:true,
imports:[FormsModule,CommonModule],
templateUrl:'./register.html',
styleUrls:['./register.css']
})

export class RegisterComponent{

name=""
email=""
password=""

constructor(
private authService:AuthService,
private router:Router
){}

register(){

const data={
name:this.name,
email:this.email,
password:this.password
}

this.authService.register(data).subscribe(()=>{

alert("Registration successful")

this.router.navigate(['/login'])

})

}

}