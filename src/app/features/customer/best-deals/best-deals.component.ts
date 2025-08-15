import { Component, Input } from '@angular/core';
import { bestDeals } from '../../../core/constant/best-deals';

@Component({
  selector: 'app-best-deals',
  standalone: true,
  imports: [],
  templateUrl: './best-deals.component.html',
  styleUrl: './best-deals.component.scss',
})
export class BestDealsComponent {
  @Input() dealName: string = '';
  @Input() bestDeals: Array<any> = [];
}
