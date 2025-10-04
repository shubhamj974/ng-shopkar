import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';

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

  getProduct() {
    return this.http.get(`${this.url}/products`).pipe(
      map((res: any) => {
        if (res.status) {
          return res.data.rows.map((p: any) => ({
            ...p,
            ...p.details,
            details: undefined,
          }));
        }
        return [];
      })
    );
  }

  getProductById(id: number) {
    return this.http.get(`${this.url}/products/${id}/product`).pipe(
      map((res : any) => {
        if(res.status){
          return res.data;
        }
      })
    )
  }

}
