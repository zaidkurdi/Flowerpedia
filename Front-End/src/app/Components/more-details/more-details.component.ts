import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FlowerService } from 'src/app/Services/flower.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css'],
})
export class MoreDetailsComponent {
  dataList: any[] = [];
  currentFlower: any;
  currentContent: any;

  constructor(private flowerService: FlowerService) {
    this.flowerService.fetchData().subscribe((data) => {
      this.dataList = [...data[0].collection_1];

      this.currentContent = {
        picture: this.dataList[0].image,
        title: this.dataList[0].title,
        definition: this.dataList[0].details.definition,
        planting: this.dataList[0].details.planting,
      };
    });
  }

  switch(id: any) {
    this.currentFlower = this.dataList.find((text) => text.id === id);

    this.currentContent.picture = this.currentFlower.image;
    this.currentContent.title = this.currentFlower.title;
    this.currentContent.definition = this.currentFlower.details.definition;
    this.currentContent.planting = this.currentFlower.details.planting;
  }
}
