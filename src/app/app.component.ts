import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'SarthiWeb';
	notHomeComponent: boolean = true;
	currentRoute: string = '';
	constructor(private router: Router) {
		this.router.events.subscribe((ev) => {
			if (ev instanceof NavigationEnd) {
				/* Your code goes here on every router change */
				this.notHomeComponent = window.location.pathname !== '/';
				this.currentRoute = window.location.pathname;
			}
		});
	}
	ngOnInit(): void {
		const l = localStorage.getItem('lang');
		if (l === undefined) {
			localStorage.setItem('lang', 'en');
		}
	}
}
