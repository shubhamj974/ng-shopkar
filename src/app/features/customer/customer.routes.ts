import { Routes } from '@angular/router';
import { FullComponent } from './full/full.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';

export const CustomerRoutes: Routes = [
  // customer.routes.ts
{
  path: '',
  component: FullComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'products/:type',
      component: ProductListComponent,
    },
    {
      path: 'product/:id',
      component: ProductViewComponent,
    },
  ],
}

];
