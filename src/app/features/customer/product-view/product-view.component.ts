import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductCategoryMenuComponent } from '../product-category-menu/product-category-menu.component';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, ProductCategoryMenuComponent, JsonPipe],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent {
  public images: Array<any> = []
  public isExpanded = false;
  public isFeatureVisible = false;
  public activeIndex: number = 0;
  public mainImage!: string;
  public activeImg: any;
  public zoomVisible = false;
  public backgroundPosition = '0% 0%';
  public product :any = {}
  private customerService = inject(CustomerService)
  lensVisible = false;
  lensWidth = 180;
  lensHeight = 100;
  lensX = 0;
  lensY = 0;
  zoomBackground = '0% 0%';
  zoomSize = '150%';
  ngOnInit() {
    this.activeImg = this.activeIndex
    this.customerService.getProductById(2).subscribe((res: any) => {
      console.log(res);
      this.product = res;
      this.imageMap(res.images)
    });
  }

  imageMap(img: Array<any>) {
    this.images = img;
    this.activeImg = this.activeIndex;
    if (this.images.length > 0) {
      this.mainImage = this.images[0].imageUrl;
    }
  }

  


  hoverThumbnail(index: number) {
    this.mainImage = this.images[index].imageUrl;
    this.activeIndex = index;
    this.activeImg = this.activeIndex
  }

  getMainImageUrl(url: string, size: number = 832): string {
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



  hideZoom() {
    this.zoomVisible = false;
  }
  onMouseEnter(event: MouseEvent) {
    this.lensVisible = true;
  }

  onMouseLeave() {
    this.lensVisible = false;
  }

  zoomImage(event: MouseEvent) {
    this.zoomVisible = true;
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    this.backgroundPosition = `${xPercent}% ${yPercent}%`;
  }

  onMouseMove(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();

    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    if (mouseX < this.lensWidth / 2) mouseX = this.lensWidth / 2;
    if (mouseY < this.lensHeight / 2) mouseY = this.lensHeight / 2;
    if (mouseX > rect.width - this.lensWidth / 2) mouseX = rect.width - this.lensWidth / 2;
    if (mouseY > rect.height - this.lensHeight / 2) mouseY = rect.height - this.lensHeight / 2;

    this.lensX = mouseX - this.lensWidth / 2;
    this.lensY = mouseY - this.lensHeight / 2;

    const xPercent = (mouseX / rect.width) * 100;
    const yPercent = (mouseY / rect.height) * 100;

    this.zoomBackground = `${xPercent}% ${yPercent}%`;

  }

}
