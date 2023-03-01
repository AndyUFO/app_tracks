import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {InfoDialogService} from "../shared/services/info-dialog.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private infoDialogService:InfoDialogService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("isValid ==="+localStorage.getItem("isValid"));
    if(localStorage.getItem("isValid")=="true"){
     return true;
    }else{
      this.infoDialogService.openDialog(
        "No tiene permisos para acceder a esta sección"
      );
      return false
    }
  }

}
