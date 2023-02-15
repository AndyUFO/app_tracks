import { Component } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router) { }

  login() {
    console.log("usuario: "+this.email);
    console.log("password: "+this.password);
    if(this.email=="user" && this.password=="user"){
      localStorage.setItem("usuario","user");
      localStorage.setItem("isValid","true");
      this.router.navigate(['/library'])
    }else if(this.email=="admin" && this.password=="admin"){
      localStorage.setItem("usuario","admin");
      localStorage.setItem("isValid","true");
      this.router.navigate(['/spotify'])
    }else{
      localStorage.setItem("isValid","false");
      alert("usuario no valido");
    }
  }

}
