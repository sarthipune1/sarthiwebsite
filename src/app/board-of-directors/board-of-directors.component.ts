import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-of-directors',
  templateUrl: './board-of-directors.component.html',
  styleUrls: ['./board-of-directors.component.scss'],
})
export class BoardOfDirectorsComponent implements OnInit {
  bod = [
    {
      image: 'photo',
      name: 'Shri. Ajit Nimbalkar',
      designation: 'IAS Chairman',
    },
    {
      image: 'photo1',
      name: 'Shri. Madhukar Kokate',
      designation: 'IAS Director',
    },
    {
      image: 'photo2',
      name: 'Shri. Umakant Dangat',
      designation: 'IAS Director',
    },
    {
      image: 'photo3',
      name: 'Shri. Navnath Pasalkar',
      designation: 'IAS Director',
    },
    {
      image: 'photo4',
      name: 'Shri. Saurabh Rao',
      designation: 'IAS Div. Commissioner, Pune Div. Pune',
    },
    {
      image: 'photo5',
      name: 'Shri. Deependra Singh Kushwah',
      designation:
        'IAS Commissioner, Skill Devp. Employment & Entrepreneurship, Navi Mumbai',
    },
    {
      image: 'photo6',
      name: 'Shri. Vishal Solanki',
      designation: 'IAS Commissioner Education Dept. Pune',
    },
    {
      image: 'photo7',
      name: 'Shri. Dheeraj Kumar',
      designation: 'IAS Commissioner Agriculture, Pune',
    },
    {
      image: 'photo8',
      name: 'Shri. Sachindra Pratap Singh',
      designation: 'IAS Commissioner, Animal Husbandry, Pune',
    },
    {
      image: 'photo9',
      name: 'Shri. Tumod Sir',
      designation: 'Dairy Development Commissioner, Mumbai',
    },
    {
      image: 'photo10',
      name: 'Shri. Om Prakash Bakoria',
      designation: 'IAS Commissioner Sports and Youth Welfare, Pune',
    },
    {
      image: 'photo11',
      name: 'Shri. Ashok W. Kakade',
      designation: 'IAS Managing Director, SARTHI, Pune',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
