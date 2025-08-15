import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { saleBanners } from '../../../core/constant/sale-banners';
@Component({
  selector: 'app-sale-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale-banner.component.html',
  styleUrl: './sale-banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SaleBannerComponent {
  public saleBanners = saleBanners;
}
