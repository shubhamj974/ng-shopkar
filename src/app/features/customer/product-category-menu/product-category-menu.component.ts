import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
interface Category {
  id : number;
  name: string;
  link?: string;
  hasSubMenu?: boolean;
}

@Component({
  selector: 'app-product-category-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.scss'
})
export class ProductCategoryMenuComponent {
   categories: Category[] = [
    {id : 1, name: 'Electronics', hasSubMenu: true },
    {id : 2, name: 'TVs & Appliances', hasSubMenu: true },
    {id : 3, name: 'Men', hasSubMenu: true },
    {id : 4, name: 'Women', hasSubMenu: true },
    {id : 5, name: 'Baby & Kids', hasSubMenu: true },
    {id : 6, name: 'Home & Furniture', hasSubMenu: true },
    {id : 7, name: 'Sports, Books & More', hasSubMenu: true },
    {id : 8, name: 'Flights', link: '/travel/flights' },
    {id : 9, name: 'Offer Zone', link: '/offers-list/top-deals' }
  ];
}
