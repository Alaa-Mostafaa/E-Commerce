import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './services/loader.service';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderservices:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('loader')
    this.loaderservices.show();
    return next.handle(request).pipe(
      finalize(()=>this.loaderservices.hide()),
    );
  }
}
