import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { getTokenExpiry } from '../../../core/utils/jwt.utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();

  private url = environment.apiUrl;
  private refreshTimer: any;

  private _accessToken: string | null = null;

  constructor(private router: Router, private http: HttpClient) {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      this._accessToken = accessToken;
      this._isLoggedIn.next(true);
      this.startRefreshTimer();
    }
  }

  /** -------------------- LOGIN -------------------- */
  login(params: any) {
    return this.http
      .post<any>(`${this.url}/auth/login`, params)
      .pipe(
        tap((res) => {
          if (res.status) {
            const data = res.data;
            this.storeAccessToken(data.accessToken);
            this._isLoggedIn.next(true);
            this.router.navigate(['/']);
          }
        })
      );
  }

  /** -------------------- STORE ACCESS TOKEN -------------------- */
  private storeAccessToken(token: string) {
    this._accessToken = token;
    sessionStorage.setItem('accessToken', token); // optional, survives reload
    this.startRefreshTimer(); // start proactive refresh
  }

  /** -------------------- GETTER -------------------- */
  get accessToken(): string | null {
    return this._accessToken;
  }

  /** -------------------- PROACTIVE REFRESH TIMER -------------------- */
  private startRefreshTimer() {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }

    if (!this._accessToken) return;

    const expiry = getTokenExpiry(this._accessToken);
    if (!expiry) return;

    const timeout = expiry - Date.now() - 10_000; // refresh 10s before expiry

    if (timeout <= 0) {
      this.refreshNow();
    } else {
      this.refreshTimer = setTimeout(() => {
        this.refreshNow();
      }, timeout);
    }
  }

  private refreshNow() {
    this.refreshToken().subscribe({
      next: (res) => {
        if (res.status) {
          this.storeAccessToken(res.data.accessToken);
        } else {
          this.logout();
        }
      },
      error: () => {
        this.logout();
      },
    });
  }

  /** -------------------- REFRESH TOKEN -------------------- */
  refreshToken() {
    return this.http.post<any>(`${this.url}/auth/refresh`, {});
  }

  /** -------------------- LOGOUT -------------------- */
  logout() {
    this._accessToken = null;
    sessionStorage.removeItem('accessToken');
    if (this.refreshTimer) clearTimeout(this.refreshTimer);
    this._isLoggedIn.next(false);

    this.http.post(`${this.url}/auth/logout`, {}).subscribe();
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return this._isLoggedIn.value;
  }

  validateToken(accessToken: string | null) {
    return this.http.post(`${this.url}/auth/validate`, {accessToken}).pipe(
      map((res) => {
        return res
      })
    )
  }
}
