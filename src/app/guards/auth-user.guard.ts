import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("isValid ==="+localStorage.getItem("isValid"));
    if(localStorage.getItem("isValid")=="true" && localStorage.getItem("usuario")=="user"){
      return true;
    }else{
      alert("No tiene permisos para acceder a esta sección")
      return false
    }
  }

}
