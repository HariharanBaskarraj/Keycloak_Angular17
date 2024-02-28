import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  private username = 'demo';
  private password = 'demo';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log(req);
    // Add authentication headers to the request

    if (req.url.includes('alfresco')) {
      const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
      const authReq = req.clone({
        setHeaders: {
          Authorization: authHeader,
        },
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
