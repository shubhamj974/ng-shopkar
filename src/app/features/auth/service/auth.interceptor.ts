import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject, catchError, filter, switchMap, take, throwError } from 'rxjs';

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = authService.accessToken;

  let authReq = req.clone({ withCredentials: true });
  if (accessToken) {
    authReq = authReq.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` },
    });
  }

  return next(authReq).pipe(
    catchError((error) => {
      // Only handle 401 Unauthorized
      if (error.status === 401) {
        // Already refreshing → wait for new token
        if (isRefreshing) {
          return refreshTokenSubject.pipe(
            filter((token) => token !== null),
            take(1),
            switchMap((token) => {
              const newReq = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` },
              });
              return next(newReq);
            })
          );
        }

        // Start refreshing
        isRefreshing = true;
        refreshTokenSubject.next(null);

        return authService.refreshToken().pipe(
          switchMap((res: any) => {
            isRefreshing = false;
            const newAccessToken = res.accessToken;
            authService['storeAccessToken'](newAccessToken);
            refreshTokenSubject.next(newAccessToken);

            const newReq = req.clone({
              setHeaders: { Authorization: `Bearer ${newAccessToken}` },
            });
            return next(newReq);
          }),
          catchError((err) => {
            isRefreshing = false;
            authService.logout();
            return throwError(() => err);
          })
        );
      }

      return throwError(() => error);
    })
  );
};
