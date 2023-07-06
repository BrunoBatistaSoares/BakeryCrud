import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { ShowModalService } from '../../services/show-modal/show-modal.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private showModalService: ShowModalService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.showModalService.setIsLoading(true);
    return next.handle(request).pipe(finalize(() => this.showModalService.setIsLoading(false)));
  }
}
