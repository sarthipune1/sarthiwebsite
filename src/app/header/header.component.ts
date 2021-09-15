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
			mr: 'छत्रपती शाहू महाराज संशोधन, प्रशिक्षण आणि मानव विकास संस्था',
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
						en: 'IT Department',
						mr: 'माहिती तंत्रज्ञान विभाग (आयटी)',
					},
					path: '/department/it',
				},
				{
					name: {
						en: 'Research',
						mr: 'संशोधन विभाग',
					},
					path: '/department/research',
				},
				{
					name: {
						en: 'Competitive Examination',
						mr: 'विविध स्पर्धा परिक्षा पूर्व तयारीसाठी कोचिंग व मार्गदर्शन विभाग',
					},
					path: '/department/competitive-exam',
				},
				{
					name: {
						en: 'Accounts',
						mr: 'लेखा जोखा',
					},
					path: '/department/accounts',
				},
				{
					name: {
						en: 'Awards',
						mr: 'पुरस्कार',
					},
					path: '/department/awards',
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
				en: 'Reports',
				mr: 'अहवाल',
			},
			path: '/reports',
		},
		{
			name: {
				en: 'Gallery',
				mr: 'छायाचित्रे',
			},
			path: '/gallery',
		},
		{
			name: {
				en: 'RTI',
				mr: 'माहितीचे अधिकार',
			},
			path: '/rti',
		},
		{
			name: {
				en: 'Board of Directors',
				mr: 'संचालक मंडळ',
			},
			path: '/board-of-directors',
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
