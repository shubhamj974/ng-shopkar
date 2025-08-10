import { Component } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROLE_MENUS } from '../../../core/constant/role-menu';

interface MenuItem {
  id: number;
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public menuActive = false;
  public menuItems: MenuItem[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.role$.subscribe((role) => {
      if (role && ROLE_MENUS[role]) {
        this.menuItems = ROLE_MENUS[role];
      } else {
        this.menuItems = [];
      }
    });
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
