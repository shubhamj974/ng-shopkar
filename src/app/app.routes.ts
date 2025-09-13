import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.AuthRoutes),
  },
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
    path: 'customer',
    loadChildren: () =>
      import('./features/customer/customer.routes').then(
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
      import('./features//support/suppot.module').then((m) => m.SuppotModule),
  },
  // Default landing page (maybe customer home)
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full',
  },
  // Wildcard route for 404
  {
    path: '**',
    redirectTo: 'customer',
  },
];
