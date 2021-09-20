import {
	Component,
	HostListener,
	Input,
	OnChanges,
	OnInit,
} from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
	@Input() route: string;

	constructor() {}

	ngOnChanges(): void {
		console.log(this.route);
	}

	ngOnInit(): void {}
	myFunction() {
		document.getElementById('myDropdown')?.classList.toggle('show');
	}

	isToggled = false;

	setLanguage(language: string) {
		localStorage.setItem('lang', language);
	}

	getLanguage(lang: string) {
		const l = localStorage.getItem('lang');
		return l === lang;
	}

	getItem(key: object) {
		const l = localStorage.getItem('lang');
		return key[l];
	}

	content = {
		title: {
			en: 'Chhatrapati Shahu Maharaj Research, Training and Human Development Institute',
			mr: 'छत्रपती शाहू महाराज संशोधन, प्रशिक्षण व मानव विकास संस्था',
		},
		sarthi: {
			en: '(SARTHI)',
			mr: '(सारथी)',
		},
	};

	menu = [
		{
			name: {
				en: 'Home',
				mr: 'मुख्य पृष्ठ',
			},
			path: '/home',
		},
		{
			name: {
				en: 'About Us',
				mr: 'आमचे विषयी',
			},
			path: '/about-us',
		},
		{
			name: {
				en: 'Department',
				mr: 'विभाग',
			},
			path: '/department',
			sublist: [
				{
					name: {
						en: 'Administration And Management',
						mr: 'आस्थापना',
					},
					path: '/department/administration-and-management',
				},
				{
					name: {
						en: 'IT Department',
						mr: 'संगणक विभाग',
					},
					path: '/department/it',
				},
				{
					name: {
						en: 'Education Department',
						mr: 'शिक्षण विभाग',
					},
					path: '/department/education-department',
				},
				{
					name: {
						en: 'Department of Coaching & Guidance of Various Competitive Examination',
						mr: 'स्पर्धा परिक्षा विभाग',
					},
					path: '/department/competitive-exam',
				},
				{
					name: {
						en: 'Library Department',
						mr: 'ग्रंथालय विभाग',
					},
					path: '/department/library-department',
				},
				{
					name: {
						en: 'Accounts',
						mr: 'लेखा / वित्त विभाग',
					},
					path: '/department/accounts',
				},
				{
					name: {
						en: 'Statistical Department',
						mr: 'सांख्यिकी विभाग',
					},
					path: '/department/statistics',
				},
				{
					name: {
						en: 'Research/Fellowship Department',
						mr: 'संशोधन/अधिछात्रवृत्ती विभाग',
					},
					path: '/department/research',
				},
				{
					name: {
						en: 'Skill Developement Department',
						mr: 'कौशल्य विकास विभाग',
					},
					path: '/department/skill-developement-department',
				},

				{
					name: {
						en: 'Caste Certificate',
						mr: 'जातीचा दाखला',
					},
					path: '/department/caste-certificate',
				},
			],
		},
		{
			name: {
				en: 'Notice Board',
				mr: 'सूचना फलक',
			},
			path: '/notices',
		},
		{
			name: {
				en: 'Interactive E Application',
				mr: 'इंटरएक्टिव ई एप्लीकेशन',
			},
			url: 'http://sarthi-maharashtragov.in/eapp',
		},
		{
			name: {
				en: 'Memebership Login',
				mr: 'सदस्यता लॉगिन',
			},
			url: 'http://sarthi-maharashtragov.in/eapp',
		},
		{
			name: {
				en: 'Awards',
				mr: 'पुरस्कार',
			},
			path: '/awards',
		},
		{
			name: {
				en: 'Tender',
				mr: 'निविदा',
			},
			path: '/awards',
		},

		{
			name: {
				en: 'Videos & Photo Gallery',
				mr: 'छायाचित्रे',
			},
			path: '/gallery',
		},
		// {
		// 	name: {
		// 		en: 'RTI',
		// 		mr: 'माहितीचे अधिकार',
		// 	},
		// 	path: '/rti',
		// },
		// {
		// 	name: {
		// 		en: 'Board of Directors',
		// 		mr: 'संचालक मंडळ',
		// 	},
		// 	path: '/board-of-directors',
		// },
		{
			name: {
				en: 'Contact Us',
				mr: 'संपर्क',
			},
			path: '/contact-us',
		},
	];

	faIcons = {
		faBars,
		faTimes,
		faHotjar,
	};
	setToggled() {
		this.isToggled = !this.isToggled;
	}
}
