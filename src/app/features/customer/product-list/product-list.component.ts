import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCategoryMenuComponent } from '../product-category-menu/product-category-menu.component';
import { CommonModule, DecimalPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, RouterModule, ProductCategoryMenuComponent, DecimalPipe],
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
        { id: 1, name: 'Mobiles & Accessories', link: '/mobiles-accessories',highlight: false },
        {id : 2, name: 'Mobiles', link: '/mobiles',highlight: true}
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
        { id: 1, name: 'Mobiles & Accessories', link: '/mobiles-accessories',highlight: false },
        {id : 2, name: 'Mobiles', link: '/mobiles',highlight: true}
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
        { id: 1, name: 'Mobiles & Accessories', link: '/mobiles-accessories',highlight: false },
        {id : 2, name: 'Mobiles', link: '/mobiles',highlight: true}
      ]
    }
  ];
  public categories : Array<any> = [];

  ngOnInit(){
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

