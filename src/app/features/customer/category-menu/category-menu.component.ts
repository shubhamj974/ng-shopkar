import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [RouterLink, JsonPipe],
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.scss',
})
export class CategoryMenuComponent {
  @Input() cate_menu: Array<any> = []
  activeSubcategory: any = null;


  syncDropdownHeights() {
    setTimeout(() => {
      const dropdowns = document.querySelectorAll<HTMLElement>('.dropdown, .dropdown-right');
      dropdowns.forEach(d => d.style.height = 'auto');
      const maxHeight = Math.max(...Array.from(dropdowns).map(d => d.offsetHeight));
      dropdowns.forEach(d => d.style.height = maxHeight + 'px');
    }, 0);
  }

}
