import { Component, inject } from '@angular/core';
import { bestDeals } from '../../../core/constant/best-deals';
import { homeDeals } from '../../../core/constant/home-deals';
import { BestDealsComponent } from '../best-deals/best-deals.component';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';
import { SaleBannerComponent } from '../sale-banner/sale-banner.component';
import { CustomerService } from '../customer.service';

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
  public cate_menu: Array<any> = [];
  public homeDeal = 'Home';
  public homeDealsItems = homeDeals;
  private authService = inject(CustomerService);

  ngOnInit() {
    this.authService.getCategory().subscribe(res => {
      const categories = res;
      const emptyObj = {
        id: 0,
        name: '',
        imageUrl: '',
        link: '',
        subcategories: [],
      };
      this.cate_menu = [emptyObj, ...categories, emptyObj];
    });
  }
}
