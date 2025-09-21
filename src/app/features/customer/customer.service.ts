import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = environment.apiUrl;
  private http = inject(HttpClient)
  private router = inject(Router)

  getCategory() {
    return this.http.get(`${this.url}/categories`).pipe(
      map((res: any) => {
        if (res.status) {
          return res.data
        }
      })
    )
  }
}
