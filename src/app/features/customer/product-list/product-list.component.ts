import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCategoryMenuComponent } from '../product-category-menu/product-category-menu.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule,ProductCategoryMenuComponent],
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
      badge: 'Bestseller',
      bankOffer: 'Bank Offer',
      exchangeOffer: 'Upto ₹9,100 Off on Exchange'
    },
     {
      id: 'MOBH8VGV88UADK2Z',
      name: 'realme P3x 5G (Midnight Blue, 128 GB)',
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=70',
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
      badge: 'Bestseller',
      bankOffer: 'Bank Offer',
      exchangeOffer: 'Upto ₹9,100 Off on Exchange'
    },
  ];
}

