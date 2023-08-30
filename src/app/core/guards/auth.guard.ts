/** Angular core */
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  private isLoggedIn$: Observable<boolean>
  private _token$: Observable<string>

  constructor(
    private router: Router
  ){
    this.isLoggedIn$ = new Observable<boolean>()
    this._token$ = new Observable<string>
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isLoggedIn$.pipe(
        take(1)
      )
      .subscribe({
        next: isLoggedIn => {
          if(!isLoggedIn){
            this.router.navigate(['/login'])
          }
        }  
      })

    return true;
  }
}
