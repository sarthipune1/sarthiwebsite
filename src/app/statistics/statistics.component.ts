import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  public saleData: any = [
    { name: 'Jan', value: 105000 },
    { name: 'Feb', value: 55000 },
    { name: 'Mar', value: 15000 },
    { name: 'Apr', value: 150000 },
    { name: 'May', value: 20000 },
    { name: 'Jun', value: 25000 },
    { name: 'July', value: 30000 },
    { name: 'Aug', value: 60000 },
    { name: 'Sep', value: 20000 },
    { name: 'Oct', value: 15000 },
    { name: 'Nov', value: 35000 },
    { name: 'Dec', value: 1000 },
  ];

  viewPort: any = [window.innerWidth / 1.5, window.innerHeight / 1.5];

  constructor() {}

  ngOnInit(): void {}
}
