import { HttpClient } from '@angular/common/http';
import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { apiUrl } from 'assets/data/environment';
type PageNavItem = {
	title: string;
	description: string;
};

export interface Subheader {
	id: number;
	header: string;
	headerKey: string;
	subheaderContent: string;
	bodyTitle: string;
	bodyContent: string;
}

@Component({
	selector: 'app-subheader',
	templateUrl: './subheader.component.html',
	styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent implements OnInit {
	@Input() route: string = '';
	baseUrl: string = apiUrl + '/subheader';
	currentRoute: string = '';
	@Input() pageStats: Subheader;
	constructor(private http: HttpClient) {}
	// ngOnChanges(changes: SimpleChanges): void {
	// 	this.currentRoute = changes.route.currentValue;

	// 	if (this.currentRoute !== undefined) {
	// 		const pageKey = this.currentRoute.replace('/pages/', '');
	// 		let currPageData: PageNavItem;
	// 		console.log('Page Key', pageKey);
	// 		// pageKey.forEach((key) => {
	// 		// 	currPageData =
	// 		// 		currPageData !== undefined
	// 		// 			? currPageData[key]
	// 		// 			: this.navBar[key];

	// 		// 	this.pageStats = currPageData;
	// 		// });

	// 		this.http
	// 			.get(this.baseUrl + '/pages/' + pageKey)
	// 			.subscribe((data: Subheader) => {
	// 				this.pageStats = data;
	// 			});
	// 	}
	// }

	navBar = {
		'about-us': {
			title: 'About Us',
			description: 'This is the about us component',
		},
		department: {
			it: {
				title: 'It Department',
				description: 'Something regarding Information Technology',
			},
			research: {
				title: 'Research / Fellowship department',
				description: 'All the research goes here',
			},
			'administration-and-management': {
				title: 'Administration And Management',
				description: 'All the management stuffs here',
			},
			'competitive-exam': {
				title: 'Competitive Exam',
				description: 'All content about exams are below',
			},
			'education-department': {
				title: 'Education Department',
				description: 'All content about education are below',
			},
			'library-department': {
				title: 'Library Department',
				description: 'All content about library are below',
			},
			accounts: {
				title: 'Accounts',
				description: 'Accounts section below',
			},
			'caste-certificate': {
				title: 'Caste Certificate',
				description: 'Details about caste certificate are added below',
			},
		},

		awards: {
			title: 'Awards',
			description: 'All the awards given',
		},
		tender: {
			title: 'Tender',
			description: 'All the tenders passed.',
		},
		success: {
			title: 'Success Stories',
			description: 'All the sucess stories here.',
		},
		gr: {
			title: 'GR & CIRCULARS',
			description: 'All the GR & CIRCULARS here.',
		},
		notices: {
			title: 'Notices',
			description: 'This will show notice description',
		},
		statistics: {
			title: 'Statistics Department',
			description: 'All the statistics will be shown',
		},
		'skill-developement-department': {
			title: 'Skill Developement Department',
			description: 'All the skill developement will be shown',
		},
		gallery: {
			title: 'Gallery',
			description: 'Photo Gallery Here',
		},
		'board-of-directors': {
			title: 'Board of directors',
			description: 'List of Board of Directors',
		},
		'contact-us': {
			title: 'Contact Us',
			description: 'Please contact us',
		},
		ebooks: {
			title: 'E-Books',
			description: 'E-Books listed below',
		},
	};

	ngOnInit(): void {}
}
