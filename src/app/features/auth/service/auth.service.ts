import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  private url = environment.apiUrl;
  isLoggedIn$ = this._isLoggedIn.asObservable();
  constructor(private router: Router, private _http: HttpClient) {
    if (localStorage.getItem('token')) {
      this._isLoggedIn.next(true);
    }
  }

  login(params: any) {
    console.log('object');
    return this._http.post(`${this.url}/auth/login`, params).pipe(
      map((res: any) => {
        if (res.status) {
          console.log('Login successful');
          localStorage.setItem('token', res.data.access_token);
          this._isLoggedIn.next(true);
          this.router.navigate(['/']);
        }
      })
    );
  }

  logout(): void {
    // Simulate logout
    localStorage.removeItem('token');
    this._isLoggedIn.next(false);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return this._isLoggedIn.value;
  }
}
