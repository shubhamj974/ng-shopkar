import { Routes } from '@angular/router';
import { FullComponent } from './full/full.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductListComponent } from './product-list/product-list.component';

export const CustomerRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
  },
   {
    path: 'product/:id',
    component: ProductViewComponent,
  },
  {
    path: 'products/:type',
    component: ProductListComponent,
  }
];
