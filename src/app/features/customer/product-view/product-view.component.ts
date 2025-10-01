import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCategoryMenuComponent } from '../product-category-menu/product-category-menu.component';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, ProductCategoryMenuComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent {
  public images: string[] = [
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/4/p/o/-original-imahfw4aasyhherc.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/1/8/g/-original-imahfw4awpphaa8g.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/t/4/-original-imahfw4asstjjqgf.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/s/1/j/-original-imahfw4apfx7ncfz.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/v/o/s/-original-imahfw4a8qdtfgr3.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/m/5/-original-imahfw4ahyuj7mpd.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/h/z/-original-imahfw4achf8wgxd.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/i/0/a/-original-imahfw4an4tz2pgm.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/s/u/-original-imahfw4a77zhfewy.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/m/3/-original-imahfw4ahbhymx8j.jpeg?q=70&crop=false"
  ];

  public activeIndex: number = 0;
  public mainImage: string = this.images[0];
  public activeImg: any;
  public zoomVisible = false;
  public backgroundPosition = '0% 0%';
  public zoomWidth = 1200;
  public zoomHeight = 1200;
  ngOnInit() {
    this.activeImg = this.activeIndex

  }
  hoverThumbnail(index: number) {
    this.mainImage = this.images[index];
    this.activeIndex = index;
    this.mainImage = this.images[index];
    this.activeImg = this.activeIndex

  }

  getMainImageUrl(url: string,size: number = 385): string {
    return url.replace(/\/128\/128\//, `/${size}/${size}/`);
  }

  scrollThumbnails(direction: number) {
    const container = document.getElementById("thumbnailList");
    if (!container) return;
    const scrollAmount = 200;
    container.scrollBy({
      top: direction * scrollAmount,
      behavior: "smooth"
    });
  }

  zoomImage(event: MouseEvent) {
    console.log(event);
    
    this.zoomVisible = true;

    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    this.backgroundPosition = `${xPercent}% ${yPercent}%`;
  }

  hideZoom() {
    this.zoomVisible = false;
  }


}
