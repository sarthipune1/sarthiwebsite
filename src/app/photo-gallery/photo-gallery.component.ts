import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  charity = {
    first: ['photo', 'photo1','photo2','photo3'],
    second: ['photo4','photo5','photo6','photo7'],
    third: [ 'photo8','photo9','photo10','photo11' ],
    nameFirst:['Shri. Ajit Nimbalkar',
      'Shri. Madhukar Kokate',
      'Shri. Umakant Dangat',
      'Shri. Navnath Pasalkar'],
    nameSecond:['Shri. Saurabh Rao',
      'Shri. Deependra Singh Kushwah',
      'Shri. Vishal Solanki',
      'Shri. Dheeraj Kumar'],
    nameThird:['Shri. Sachindra Pratap Singh',
      'Shri. Tumod Sir',
      'Shri. Om Prakash Bakoria',
      'Shri. Ashok W. Kakade'
    ],
    designationFirst:['IAS Chairman',
      'IAS Director',
      'IASDirector',
      'IAS Director'],
    designationSecond:['IAS Div. Commissioner, Pune Div. Pune',
      'IAS Commissioner, Skill Devp. Employment & Entrepreneurship, Navi Mumbai',
      'IAS Commissioner Education Dept. Pune',
      'IAS Commissioner Agriculture, Pune'],
    designationThird:['IAS Commissioner, Animal Husbandry, Pune',
      'Dairy Development Commissioner, Mumbai',
      'IAS Commissioner Sports and Youth Welfare, Pune',
      'IAS Managing Director, SARTHI, Pune'
    ],
  };

  bod=[
    {
      image:'photo',
      name:'Shri. Ajit Nimbalkar',
      designation:'IAS Chairman'
    },{
      image:'photo1',
      name:'Shri. Madhukar Kokate',
      designation:'IAS Director'
    },{
      image:'photo2',
      name:'Shri. Umakant Dangat',
      designation:'IAS Director'
    },{
      image:'photo3',
      name:'Shri. Navnath Pasalkar',
      designation:'IAS Director'
    },{
      image:'photo4',
      name:'Shri. Saurabh Rao',
      designation:'IAS Div. Commissioner, Pune Div. Pune'
    },{
      image:'photo5',
      name:'Shri. Deependra Singh Kushwah',
      designation:'IAS Commissioner, Skill Devp. Employment & Entrepreneurship, Navi Mumbai'
    },{
      image:'photo6',
      name:'Shri. Vishal Solanki',
      designation:'IAS Commissioner Education Dept. Pune'
    },{
      image:'photo7',
      name:'Shri. Dheeraj Kumar',
      designation:'IAS Commissioner Agriculture, Pune'
    },{
      image:'photo8',
      name:'Shri. Sachindra Pratap Singh',
      designation:'IAS Commissioner, Animal Husbandry, Pune'
    },{
      image:'photo9',
      name:'Shri. Tumod Sir',
      designation:'Dairy Development Commissioner, Mumbai'
    },{
      image:'photo10',
      name:'Shri. Om Prakash Bakoria',
      designation:'IAS Commissioner Sports and Youth Welfare, Pune'
    },{
      image:'photo11',
      name:'Shri. Ashok W. Kakade',
      designation:'IAS Managing Director, SARTHI, Pune'
    },

  ]

  constructor() {}

  ngOnInit(): void {}
}
