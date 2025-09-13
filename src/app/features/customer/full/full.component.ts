import { Component } from '@angular/core';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';
import { SaleBannerComponent } from '../sale-banner/sale-banner.component';
import { BestDealsComponent } from '../best-deals/best-deals.component';
import { bestDeals } from '../../../core/constant/best-deals';
import { homeDeals } from '../../../core/constant/home-deals';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [
    CategoryMenuComponent,
    SaleBannerComponent,
    BestDealsComponent,
    NavbarComponent,
  ],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss',
})
export class FullComponent {
  public smartPhoneDeal = 'Best Deals on Smartphones';
  public bestDealsItems = bestDeals;

  public homeDeal = 'Home';
  public homeDealsItems = homeDeals;
}
