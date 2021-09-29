import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
	Router,
	// import as RouterEvent to avoid confusion with the DOM Event
	Event as RouterEvent,
	NavigationStart,
	NavigationEnd,
	NavigationCancel,
	NavigationError,
} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'SarthiWeb';
	notHomeComponent: boolean = true;
	currentRoute: string = '';
	loading = true;
	constructor(private router: Router) {
		this.router.events.subscribe((ev: RouterEvent) => {
			this.navigationInterceptor(ev);
			if (ev instanceof NavigationEnd) {
				/* Your code goes here on every router change */
				this.notHomeComponent = window.location.pathname !== '/';
				this.currentRoute = window.location.pathname;
			}
		});
	}
	ngOnInit(): void {
		const l = localStorage.getItem('lang');
		if (l === undefined || l === null) {
			localStorage.setItem('lang', 'en');
		}
	}
	// Shows and hides the loading spinner during RouterEvent changes
	navigationInterceptor(event: RouterEvent): void {
		if (event instanceof NavigationStart) {
			this.loading = true;
		}
		if (event instanceof NavigationEnd) {
			this.loading = false;
		}

		// Set loading state to false in both of the below events to hide the spinner in case a request fails
		if (event instanceof NavigationCancel) {
			this.loading = false;
		}
		if (event instanceof NavigationError) {
			this.loading = false;
		}
	}
}
