import { Component, OnInit } from '@angular/core';
import { FlowerService } from 'src/app/Services/flower.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  dataList: any;
  currentFlowerInfo: any;
  Collection_1: any;
  Collection_2: any;
  Collection_3: any;

  constructor(private flowerService: FlowerService) {}

  ngOnInit() {
    this.flowerService.fetchData().subscribe((data) => {
      this.dataList = {
        collection_1: data[0]['collection_1'],
        collection_2: data[0]['collection_2'],
        collection_3: data[0]['collection_3'],
      };
      this.currentFlowerInfo = {
        Image: this.dataList.collection_1[0].image,
        title: this.dataList.collection_1[0].title,
        describtion: this.dataList.collection_1[0].describtion,
      };
      this.Collection_1 = this.dataList.collection_1;
      this.Collection_2 = this.dataList.collection_2;
      this.Collection_3 = this.dataList.collection_3;
    });
  }

  switchCurrentFlower(picture: any, title: any, describtion: any) {
    this.currentFlowerInfo.Image = picture.src;
    this.currentFlowerInfo.title = title.innerText;
    this.currentFlowerInfo.describtion = describtion.innerText;
  }
}
