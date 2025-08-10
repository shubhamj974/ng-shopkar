import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'seller',
    loadChildren: () =>
      import('./features/seller/seller.module').then((m) => m.SellerModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/customer//customer.routes').then(
        (m) => m.CustomerRoutes
      ),
  },
  {
    path: 'delivery',
    loadChildren: () =>
      import('./features/delivery/delivery.module').then(
        (m) => m.DeliveryModule
      ),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./features/support/suppot.module').then((m) => m.SuppotModule),
  },
  {
    path: '',
    redirectTo: '', // or a public landing page
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '', // fallback route
  },
];
