/** Angular core */
import { Injectable } from '@angular/core'
import { Observable, finalize } from 'rxjs'

/** Http */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {

  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    return next.handle(req).pipe(
      finalize(() => true)
    )
  }
}
