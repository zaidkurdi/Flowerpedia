import { FlowerService } from 'src/app/Services/flower.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slideshow',
  templateUrl: './image-slideshow.component.html',
  styleUrls: ['./image-slideshow.component.css'],
})
export class ImageSlideshowComponent {
  images: any[] = [];

  constructor(private flowerService: FlowerService) {
    this.flowerService.fetchData().subscribe((data) => {
      this.images = [
        ...data[0].collection_1,
        ...data[0].collection_2,
        ...data[0].collection_3,
      ];
    });
  }
}
