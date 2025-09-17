import { Component } from '@angular/core';
import { bestDeals } from '../../../core/constant/best-deals';
import { homeDeals } from '../../../core/constant/home-deals';
import { BestDealsComponent } from '../best-deals/best-deals.component';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';
import { SaleBannerComponent } from '../sale-banner/sale-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategoryMenuComponent,
    SaleBannerComponent,
    BestDealsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public smartPhoneDeal = 'Best Deals on Smartphones';
  public bestDealsItems = bestDeals;

  public homeDeal = 'Home';
  public homeDealsItems = homeDeals;
}
