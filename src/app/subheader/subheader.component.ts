import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
type PageNavItem = {
	title: string;
	description: string;
};

@Component({
	selector: 'app-subheader',
	templateUrl: './subheader.component.html',
	styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent implements OnInit, OnChanges {
	@Input() route: string = '';
	currentRoute: string = '';
	pageStats: PageNavItem = {
		title: '',
		description: '',
	};
	constructor() {}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('Subheader', changes.route);
		this.currentRoute = changes.route.currentValue;

		if (this.currentRoute !== undefined) {
			const pageKey = this.currentRoute.split('/');
			let currPageData: PageNavItem;
			pageKey.forEach((key) => {
				currPageData =
					currPageData !== undefined
						? currPageData[key]
						: this.navBar[key];

				this.pageStats = currPageData;
			});
		}

		console.log('Current Page Data', this.pageStats);
	}

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
				title: 'Research',
				description: 'All the research goes here',
			},
			'competitive-exam': {
				title: 'Competitive Exam',
				description: 'All content about exams are below',
			},
			accounts: {
				title: 'Accounts',
				description: 'Accounts section below',
			},
			awards: {
				title: 'Awards',
				description: 'All the awards given',
			},
			'caste-certificate': {
				title: 'Caste Certificate',
				description: 'Details about caste certificate are added below',
			},
		},
		notices: {
			title: 'Notices',
			description: 'This will show notice description',
		},
		reports: {
			title: 'Reports',
			description: 'All the reports will be shown',
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
	};

	ngOnInit(): void {}
}
