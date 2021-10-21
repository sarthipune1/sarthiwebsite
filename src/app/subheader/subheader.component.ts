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
