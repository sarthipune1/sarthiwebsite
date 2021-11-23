import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { apiUrl } from 'assets/data/environment';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	currentCounter: string[];
	getItem(key: object): string {
		const l = localStorage.getItem('lang');
		return key[l];
	}
	content = {
		address: {
			en: `Sarthi Office Address`,
			mr: 'सारथी कार्यालय पत्ता',
		},
		content: {
			en: 'Balchitravani, C T Survey Number 173, B/1, Gopal Ganesh Agarkar Road, Pune 411 004',
			mr: 'बालचित्रावानी, सीटी सर्वे नंबर 173, बी/1, गोपाल गणेश आगरकर रोड, पुणे - 411 004',
		},
		sapiens: {
			en: 'Developed with 🧡 for community by Supersapiens',
			mr: 'Supersapiens द्वारा मावळ्यांसाठी सह 🧡 विकसित',
		},
	};
	getCurrentLang() {
		return localStorage.getItem('lang');
	}

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.http
			.get<number>(apiUrl + '/visitCounter')
			.subscribe((data: number) => {
				this.currentCounter = data
					.toString()
					.padStart(8, '0')
					.split('');
			});
	}
}
