import {
	Component,
	HostListener,
	Input,
	OnChanges,
	OnInit,
} from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { INotice } from 'app/notice/notice.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
	@Input() route: string;

	constructor(private routeService: RouteService, private http: HttpClient) {
		this.getMarquee();
	}

	ngOnChanges(): void {
		// console.log(this.route);
	}

	baseUrl = environment.apiUrl;

	pageStats: Subheader;
	marquee: INotice[];

	ngOnInit(): void {
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
	}
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

	getMarquee() {
		this.http
			.get(`${this.baseUrl}/notices/marquee`)
			.subscribe((data: INotice[]) => {
				this.marquee = data;
			});
	}

	content = {
		title: {
			en: 'Chhatrapati Shahu Maharaj Research, Training and Human Development Institute (SARTHI)',
			mr: 'छत्रपती शाहू महाराज संशोधन, प्रशिक्षण व मानव विकास संस्था (सारथी)',
		},
		sarthi: {
			en: '(SARTHI)',
			mr: '(सारथी)',
		},
		slogan: {
			en: '(An Autonomous Institute of Govt. of Maharashtra)',
			mr: '(महाराष्ट्र शासनाची स्वायत्त संस्था)',
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
				en: 'Board of Directors',
				mr: 'संचालक मंडळ',
			},
			path: '/pages/board-of-directors',
		},
		{
			name: {
				en: 'Vision',
				mr: 'स्वप्नवत',
			},
			path: '/pages/vision',
		},
		{
			name: {
				en: 'Misssion',
				mr: 'शिष्टमंडळ',
			},
			path: '/pages/mission',
		},
		// {
		// 	name: {
		// 		en: 'About Us',
		// 		mr: 'आमचे विषयी',
		// 	},
		// 	path: '/pages/about-us',
		// },
		{
			name: {
				en: 'Department',
				mr: 'विभाग',
			},
			path: '/department/administration-and-management',
			sublist: [
				{
					name: {
						en: 'Administration And Management',
						mr: 'आस्थापना व मानव विकास विभाग',
					},
					path: '/department/administration-and-management',
				},
				// {
				// 	name: {
				// 		en: 'IT Department',
				// 		mr: 'संगणक विभाग',
				// 	},
				// 	path: '/department/it',
				// },
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
		// {
		// 	name: {
		// 		en: 'Notice Board',
		// 		mr: 'सूचना फलक',
		// 	},
		// 	path: '/notices',
		// },
		// {
		// 	name: {
		// 		en: 'Interactive E Application',
		// 		mr: 'इंटरएक्टिव ई एप्लीकेशन',
		// 	},
		// 	url: 'http://eapp.sarthi-maharashtragov.in/',
		// },
		// {
		// 	name: {
		// 		en: 'Memebership Login',
		// 		mr: 'सदस्यता लॉगिन',
		// 	},
		// 	url: 'http://admin.sarthi-maharashtragov.in',
		// },

		// {
		// 	name: {
		// 		en: 'Tender',
		// 		mr: 'निविदा',
		// 	},
		// 	path: '/pages/tender',
		// },
		// {
		// 	name: {
		// 		en: 'Success Stories',
		// 		mr: 'यशोगाथा',
		// 	},
		// 	path: '/pages/success',
		// },
		{
			name: {
				en: 'Important Circulars',
				mr: 'परिपत्रक',
			},
			path: '/pages/gr',
		},
		{
			name: {
				en: 'E-Books',
				mr: 'ई-बुक',
			},
			path: '/pages/ebooks',
		},
		{
			name: {
				en: 'Videos & Photo Gallery',
				mr: 'छायाचित्रे',
			},
			path: '/pages/gallery',
		},
		{
			name: {
				en: 'Awards',
				mr: 'पुरस्कार',
			},
			path: '/pages/awards',
		},
		// {
		// 	name: {
		// 		en: 'RTI',
		// 		mr: 'माहितीचे अधिकार',
		// 	},
		// 	path: '/rti',
		// },

		{
			name: {
				en: 'Contact Us',
				mr: 'संपर्क',
			},
			path: '/pages/contact-us',
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

	increaseFont(zoomVal: number) {
		const zoom: any = document.getElementsByTagName('body')[0];
		zoom.style.zoom = zoomVal;
	}
}
