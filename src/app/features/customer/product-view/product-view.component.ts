import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCategoryMenuComponent } from '../product-category-menu/product-category-menu.component';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule,ProductCategoryMenuComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent {

}
