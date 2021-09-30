import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	getItem(key: object): string {
		const l = localStorage.getItem('lang');
		return key[l];
	}
	content = {
		address: {
			en: `Secretary's Office Address`,
			mr: 'सचिव कार्यालय ऑफ़ीस पत्ता',
		},
		content: {
			en: 'Planning Department, Government of Maharashtra, Mumbai-32',
			mr: 'नियोजन विभाग, महाराष्ट्र शासन , मंत्रालय , मुबंई-32',
		},
		sapiens: {
			en: 'Developed with 🧡 for community by Supersapiens',
			mr: 'Supersapiens द्वारा मावळ्यांसाठी सह 🧡 विकसित',
		},
	};
	getCurrentLang() {
		return localStorage.getItem('lang');
	}

	constructor() {}

	ngOnInit(): void {}
}
