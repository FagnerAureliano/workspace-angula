import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { join } from 'path';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {


  private handleUserName(username: string): string {
    return (
      username
        ?.split(' ')
        ?.map((name) => {
          return name
            ? `${name[0]?.toUpperCase()}${name?.slice(1)?.toLowerCase()}`
            : null;
        })
        ?.join(' ') || 'Usuário não identificado'
    );
  }



  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
