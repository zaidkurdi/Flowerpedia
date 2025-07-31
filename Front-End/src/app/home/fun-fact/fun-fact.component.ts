import { Component } from '@angular/core';
import { FlowerService } from 'src/app/Services/flower.service';

@Component({
  selector: 'app-fun-fact',
  templateUrl: './fun-fact.component.html',
  styleUrls: ['./fun-fact.component.css'],
})
export class FunFactComponent {
  facts: any[] = [];

  constructor(private flowerService: FlowerService) {
    this.flowerService.fetchData().subscribe((data) => {
      this.facts = [...data[0].collection_1];

      console.log(this.facts);
    });
  }
}
