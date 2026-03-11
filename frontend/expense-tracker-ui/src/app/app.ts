import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, RouterLink, CommonModule],
templateUrl: './app.html'
,
styleUrls: ['./app.css']
})
export class AppComponent {

isLoggedIn(){

return localStorage.getItem("token") != null

}

logout(){

localStorage.removeItem("token")

window.location.href="/login"

}

}