import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 100,
    fluidSpeed: true,
    lazyLoad: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  noticeData = [
    {
      date: {
        month: 'May',
        date: 31,
      },
      title: 'Memorial day holiday 2021',
      time: '12:00 AM',
    },
    {
      date: {
        month: 'June',
        date: 11,
      },
      title: 'Summer A 2021 classes (4 & 8 week) begins',
      time: '12:00 AM',
    },
    {
      date: {
        month: 'Sep',
        date: 25,
      },
      title: 'Summer A 2022',
      time: '12:00 AM',
    },
    {
      date: {
        month: 'May',
        date: 31,
      },
      title: 'Memorial day holiday 2021',
      time: '12:00 AM',
    },
  ];
}
