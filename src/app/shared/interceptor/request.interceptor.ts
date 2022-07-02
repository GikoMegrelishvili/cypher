import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../loading/loading.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private _loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loadingService.showLoading();
    return next.handle(request).pipe(
      finalize(() => {
        this._loadingService.hideLoading();
      })
    );
  }
}
