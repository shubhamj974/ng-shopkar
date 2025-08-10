import { Component } from '@angular/core';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [CategoryMenuComponent],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss',
})
export class FullComponent {}
