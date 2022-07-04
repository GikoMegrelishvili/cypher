import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { LoadingService } from '../loading/loading.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private _loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._loadingService.showLoading();
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        this._loadingService.hideLoading();
        return throwError(() => err);
      }),
      finalize(() => {
        this._loadingService.hideLoading();
      })
    );
  }
}
