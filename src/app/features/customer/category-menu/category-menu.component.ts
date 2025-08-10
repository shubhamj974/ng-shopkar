import { Component } from '@angular/core';
import {
  CATEGORY_MENU,
  CategoryItem,
} from '../../../core/constant/category-menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.scss',
})
export class CategoryMenuComponent {
  public categories: CategoryItem[] = CATEGORY_MENU;
  activeSubcategory: any = null;
}
