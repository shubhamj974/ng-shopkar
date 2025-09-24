import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() filterOptions: Array<any> = []
  @Input() categories: Array<any> = []


  toggleFilter(filter: any) {
    filter.expanded = !filter.expanded;
  }

}
