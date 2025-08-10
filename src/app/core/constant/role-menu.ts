// src/app/core/constants/role-menus.ts

export interface MenuItem {
  id: number;
  label: string;
  route: string;
  icon?: string; // Optional: for icons if you want
}

export const ROLE_MENUS: Record<string, MenuItem[]> = {
  admin: [
    { id: 1, label: 'Dashboard', route: '/admin/dashboard', icon: 'dashboard' },
    { id: 2, label: 'Users', route: '/admin/users', icon: 'people' },
    { id: 3, label: 'Settings', route: '/admin/settings', icon: 'settings' },
  ],
  seller: [
    {
      id: 1,
      label: 'Dashboard',
      route: '/seller/dashboard',
      icon: 'dashboard',
    },
    { id: 2, label: 'Products', route: '/seller/products', icon: 'store' },
    { id: 3, label: 'Orders', route: '/seller/orders', icon: 'shopping_cart' },
  ],
  customer: [
    { id: 3, label: 'Cart', route: '/cart', icon: 'shopping_cart' },
    { id: 4, label: 'Orders', route: '/orders', icon: 'receipt_long' },
  ],
  delivery: [
    {
      id: 1,
      label: 'Dashboard',
      route: '/delivery/dashboard',
      icon: 'dashboard',
    },
    {
      id: 2,
      label: 'Deliveries',
      route: '/delivery/tasks',
      icon: 'local_shipping',
    },
  ],
  support: [
    {
      id: 1,
      label: 'Dashboard',
      route: '/support/dashboard',
      icon: 'dashboard',
    },
    {
      id: 2,
      label: 'Tickets',
      route: '/support/tickets',
      icon: 'support_agent',
    },
  ],
};
