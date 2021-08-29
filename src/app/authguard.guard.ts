import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userStr = localStorage.getItem("user");
      const data = userStr != null ? JSON.parse(userStr) : [];
      console.log(data);
      if(data!=null&& data.userData.userRole=='admin'){
        return true;
      }else{
        alert('Your are not authorised')
        window.location.href='login'
      }
    return true;
  }
  
}
