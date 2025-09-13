import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.AuthRoutes),
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'seller',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/seller/seller.module').then((m) => m.SellerModule),
  },
  {
    path: 'customer',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/customer/customer.routes').then(
        (m) => m.CustomerRoutes
      ),
  },
  {
    canActivate: [authGuard],
    path: 'delivery',
    loadChildren: () =>
      import('./features/delivery/delivery.module').then(
        (m) => m.DeliveryModule
      ),
  },
  {
    canActivate: [authGuard],
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
