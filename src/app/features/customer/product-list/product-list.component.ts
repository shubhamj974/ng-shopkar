import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCategoryMenuComponent } from '../product-category-menu/product-category-menu.component';
import { CommonModule, DecimalPipe, JsonPipe } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ProductCategoryMenuComponent, DecimalPipe, FilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public products = [
    {
      id: 'MOBH8VGV88UADK2Z',
      name: 'realme P3x 5G (Midnight Blue, 128 GB)',
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=70',
      rating: 4.4,
      ratings: 2250,
      reviews: 1163,
      price: 12999,
      originalPrice: 16999,
      discount: '23% off',
      specs: [
        '6 GB RAM | 128 GB ROM',
        '17.07 cm (6.72 inch) Full HD Display',
        '50MP Rear Camera | 8MP Front Camera',
        '6000 mAh Battery',
        'Dimensity 6400 Processor',
        '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
      ],
      stock: 5,
      badge: 'Bestseller',
      bankOffer: 'Bank Offer',
      exchangeOffer: 9100,
      categories: [
        { id: 1, name: 'Mobiles & Accessories', link: '/mobiles-accessories', highlight: false },
        { id: 2, name: 'Mobiles', link: '/mobiles', highlight: true }
      ]
    },
    {
      id: 'MOBH8VGV88UADK2Z',
      name: 'realme P3x 5G (Midnight Blue, 128 GB)',
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/i/-original-imahfvuagzmf2ppf.jpeg?q=70',
      rating: 4.4,
      reviews: 1163,
      price: 12999,
      originalPrice: 16999,
      discount: '23% off',
      specs: [
        '6 GB RAM | 128 GB ROM',
        '17.07 cm (6.72 inch) Full HD Display',
        '50MP Rear Camera | 8MP Front Camera',
        '6000 mAh Battery',
        'Dimensity 6400 Processor',
        '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
      ],
      stock: 8,
      badge: 'Bestseller',
      bankOffer: 'Bank Offer',
      exchangeOffer: 9100,
      categories: [
        { id: 1, name: 'Mobiles & Accessories', link: '/mobiles-accessories', highlight: false },
        { id: 2, name: 'Mobiles', link: '/mobiles', highlight: true }
      ]
    },
    {
      id: 'MOBH8VGV88UADK2Z',
      name: 'realme P3x 5G (Midnight Blue, 128 GB)',
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/d/u/-original-imahfvuawe5fazcy.jpeg?q=70',
      rating: 4.4,
      reviews: 1163,
      price: 12999,
      originalPrice: 16999,
      discount: '23% off',
      specs: [
        '6 GB RAM | 128 GB ROM',
        '17.07 cm (6.72 inch) Full HD Display',
        '50MP Rear Camera | 8MP Front Camera',
        '6000 mAh Battery',
        'Dimensity 6400 Processor',
        '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
      ],
      stock: 8,
      badge: 'Bestseller',
      bankOffer: 'Bank Offer',
      exchangeOffer: 9100,
      categories: [
        { id: 1, name: 'Mobiles & Accessories', link: '/mobiles-accessories', highlight: false },
        { id: 2, name: 'Mobiles', link: '/mobiles', highlight: true }
      ]
    }
  ];
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

  ngOnInit() {
    const categoryMap = new Map();

    this.products.forEach(product => {
      product.categories.forEach(cat => {
        if (!categoryMap.has(cat.id)) {
          categoryMap.set(cat.id, cat);
        }
      });
    });

    this.categories = Array.from(categoryMap.values());
  }
}

