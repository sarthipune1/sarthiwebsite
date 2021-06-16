import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  photoItems = [
    {
      image: 'photo.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo1.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo2.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo3.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo2.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo1.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo3.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo1.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo3.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
    {
      image: 'photo1.png',
      name: 'Dr. Amy Bragg Carey',
      position: 'President,President’s Office',
    },
  ];
}
