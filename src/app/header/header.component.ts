import {
	Component,
	HostListener,
	Input,
	OnChanges,
	OnInit,
} from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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

	menu = [
		{
			name: 'Home',
			path: '/home',
		},
		{
			name: 'About Us',
			path: '/about-us',
		},
		{
			name: 'Department',
			path: '/department',
			sublist: [
				{
					name: 'IT Department',
					path: '/department/it',
				},
				{
					name: 'Women Enpowerment',
					path: '/department/women-empowerment',
				},
			],
		},
		{
			name: 'Accounts',
			path: '/accounts',
		},
		{
			name: 'Notice Board',
			path: '/notices',
		},
		{
			name: 'Reports',
			path: '/reports',
		},
		{
			name: 'Caste Certificate',
			path: '/caste-certificate',
		},
		{
			name: 'Awards',
			path: '/awards',
		},
		// {
		//   name: 'Events',
		//   path: '/events',
		// },
		{
			name: 'Photo Gallery',
			path: '/photo-gallery',
		},
		{
			name: 'RTI',
			path: '/rti',
		},
		{
			name: 'Board of Directors',
			path: '/board-of-directors',
		},
		{
			name: 'Contact Us',
			path: '/contact-us',
		},
	];

	faIcons = {
		faBars,
		faTimes,
	};
	setToggled() {
		this.isToggled = !this.isToggled;
	}
}
