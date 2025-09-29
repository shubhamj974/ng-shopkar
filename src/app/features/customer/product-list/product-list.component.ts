import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCategoryMenuComponent } from '../product-category-menu/product-category-menu.component';
import { CommonModule, DecimalPipe, JsonPipe } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ProductCategoryMenuComponent, DecimalPipe, FilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public products: Array<any> = [];
  public categories: Array<any> = [];
  public filterOptions = [
    {
      id: 1,
      title: 'Brand',
      options: [
        { id: 1, name: 'realme', checked: false },
        { id: 2, name: 'Samsung', checked: false },
        { id: 3, name: 'Apple', checked: false },
        { id: 4, name: 'POCO', checked: false },
      ],
    },
    {
      id: 2,
      title: 'RAM',
      options: [
        { id: 5, name: '4 GB', checked: false },
        { id: 6, name: '6 GB', checked: false },
        { id: 7, name: '8 GB', checked: false },
        { id: 8, name: '12 GB', checked: false },
      ],
    },
    {
      id: 3,
      title: 'NETWORK TYPE',
      options: [
        { id: 9, name: '2G', checked: false },
        { id: 10, name: '3G', checked: false },
        { id: 11, name: '4G', checked: false },
        { id: 12, name: '5G', checked: false },
      ],
    },
    {
      id: 4,
      title: 'INTERNAL STORAGE',
      options: [
        { id: 13, name: '128 - 255.9 GB', checked: false },
      ],
    },

    {
      id: 5,
      title: 'TYPE',
      options: [
        { id: 1, name: 'Smartphones', checked: false },
      ],
    },
    {
      id: 6,
      title: 'CLOCK SPEED',
      options: [
        { id: 1, name: '2.5 & Above', checked: false },
      ],
    },
    {
      id: 7,
      title: 'PROCESSOR BRAND',
      options: [
        { id: 1, name: 'Mediatek', checked: false },
      ],
    },
    {
      id: 8,
      title: 'BATTERY CAPACITY',
      options: [
        { id: 1, name: '6000 mAh & Above', checked: false },
      ],
    },
    {
      id: 9,
      title: 'SPECIALITY',
      options: [
        { id: 1, name: 'Big Storage', checked: false },
        { id: 2, name: 'Higher Performence', checked: false },
        { id: 3, name: 'Long-Lasting Battery', checked: false },
      ],
    },
    {
      id: 10,
      title: 'OPERATING SYSTEM',
      options: [
        { id: 1, name: 'Andriod', checked: false },
      ],
    },
    {
      id: 11,
      title: 'SIM TYPE',
      options: [
        { id: 1, name: 'Dual Sim(Nano + eSIM)', checked: false },
      ],
    },
    {
      id: 12,
      title: 'SCREEN SIZE',
      options: [
        { id: 1, name: '6 - 6.3 inch', checked: false },
      ],
    },
    {
      id: 13,
      title: 'CUSTOMER RATING',
      options: [
        { id: 1, name: '4★ & above', checked: false },
        { id: 1, name: '3★ & above', checked: false },
      ],
    },
    {
      id: 14,
      title: 'PRIMARY CAMERA',
      options: [

        { id: 1, name: '48 - 63.9 MP', checked: false },
      ],
    },
    {
      id: 15,
      title: 'DISCOUNT',
      options: [
        { id: 1, name: '50% or more', checked: false },
        { id: 2, name: '40% or more', checked: false },
        { id: 3, name: '30% or more', checked: false },
        { id: 4, name: '20% or more', checked: false },
        { id: 5, name: '10% or more', checked: false },
      ],
    },
    {
      id: 14,
      title: 'SECONDARY CAMERA',
      options: [

        { id: 1, name: '8 - 11.9 MP', checked: false },
      ],
    },
  ];

  public selected: 'yes' | 'no' | null = null;
  public reason: string = '';
  public isOpen = false; // 👈 declare it here
  private customerSerivce = inject(CustomerService)
  ngOnInit() {
    this.init()
  }

  init() {
    this.customerSerivce.getProduct().subscribe(res => {
      console.log('products', res);
      this.products = res
      const categoryMap = new Map();
      this.products.forEach((product: any) => {
        if (product.category) {
          if (!categoryMap.has(product.category.id)) {
            categoryMap.set(product.category.id, product.category);
          }
        }
      });

      this.categories = Array.from(categoryMap.values());
      console.log('categories', this.categories);
    })
  }


  selectFeedback(choice: 'yes' | 'no') {
    this.selected = choice;
    console.log(this.selected);
    
  }

  submitFeedback() {
    
  }
}

