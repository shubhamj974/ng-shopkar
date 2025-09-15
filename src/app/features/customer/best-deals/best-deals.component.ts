import { Component, Input } from '@angular/core';
import { bestDeals } from '../../../core/constant/best-deals';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-best-deals',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './best-deals.component.html',
  styleUrl: './best-deals.component.scss',
})
export class BestDealsComponent {
  @Input() dealName: string = '';
  @Input() bestDeals: Array<any> = [];
}
