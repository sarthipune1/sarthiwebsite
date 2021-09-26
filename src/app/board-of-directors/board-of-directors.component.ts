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
			name: 'Shri. Ajit Nimbalkar (retd)',
			designation: 'Chairman',
		},
		{
			image: 'photo1',
			name: 'Shri. Madhukar Kokate (IAS)',
			designation: 'Director',
		},
		{
			image: 'photo2',
			name: 'Shri. Umakant Dangat (retd)',
			designation: 'Director',
		},
		{
			image: 'photo3',
			name: 'Shri. Navnath Pasalkar',
			designation: 'Director',
		},
		{
			image: 'photo4',
			name: 'Shri. Saurabh Rao (IAS)',
			designation: 'Div. Commissioner, Pune Div. Pune',
		},
		{
			image: 'photo5',
			name: 'Shri. Deependra Singh Kushwah (IAS)',
			designation:
				'Commissioner, Skill Devp. Employment & Entrepreneurship, Navi Mumbai',
		},
		{
			image: 'photo6',
			name: 'Shri. Vishal Solanki (IAS)',
			designation: 'Commissioner Education Dept. Pune',
		},
		{
			image: 'photo7',
			name: 'Shri. Dheeraj Kumar (IAS)',
			designation: 'Commissioner Agriculture, Pune',
		},
		{
			image: 'photo8',
			name: 'Shri. Sachindra Pratap Singh (IAS)',
			designation: 'Commissioner, Animal Husbandry, Pune',
		},
		{
			image: 'photo9',
			name: 'Shri. Tumod Sir (IAS)',
			designation: 'Dairy Development Commissioner, Mumbai',
		},
		{
			image: 'photo10',
			name: 'Shri. Om Prakash Bakoria (IAS)',
			designation: 'Commissioner Sports and Youth Welfare, Pune',
		},
		{
			image: 'photo11',
			name: 'Shri. Ashok W. Kakade (IAS)',
			designation: 'Managing Director, SARTHI, Pune',
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
