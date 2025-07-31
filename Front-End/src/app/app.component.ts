import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlowerService } from './Services/flower.service';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'flowerpedia';

  dataList: any;

  constructor(public flower: FlowerService) {}

  ngOnInit(): void {
    this.flower.fetchData().subscribe((data) => {
      this.dataList = data;
    });
  }
}
