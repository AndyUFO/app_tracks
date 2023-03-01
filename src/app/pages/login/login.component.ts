import { Component } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario!: string;
  password!: string;

  constructor(private router: Router) { }

  login() {
    if(this.usuario=="user" && this.password=="user"){
      localStorage.setItem("usuario","user");
      localStorage.setItem("password","user");
      localStorage.setItem("isValid","true");
      this.router.navigate(['/library'])
    }else if(this.usuario=="admin" && this.password=="admin"){
      localStorage.setItem("usuario","admin");
      localStorage.setItem("password","admin");
      localStorage.setItem("isValid","true");
      this.router.navigate(['/music'])
    }else{
      localStorage.setItem("isValid","false");
      if(this.usuario==undefined){
        throw Error("Debe ingresar el nombre de usuario");
      }else if (this.password==undefined){
        throw Error("Debe ingresar el password");
      }else{
        throw Error("Usuario no valido");
      }
    }
  }

}
