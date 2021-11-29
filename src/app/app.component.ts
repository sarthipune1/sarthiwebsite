import { HttpClient } from '@angular/common/http';
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
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';
import { environment } from '../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'SarthiWeb';
	notHomeComponent: boolean = true;
	currentRoute: string = '';
	subheaderUrl: string = environment.apiUrl + '/subheader';
	pageStats: Subheader;
	loading = false;

	isBannerVisible = false;
	bannerDelayTime = 27;
	faIcons = {
		faTimes,
	};
	constructor(
		private router: Router,
		private http: HttpClient,
		private routeService: RouteService
	) {
		this.router.events.subscribe((ev: RouterEvent) => {
			this.navigationInterceptor(ev);
			if (ev instanceof NavigationEnd) {
				/* Your code goes here on every router change */
				this.notHomeComponent = window.location.pathname !== '/';
				this.currentRoute = window.location.pathname;
				this.getPageStats(this.currentRoute.replace('/pages', ''));
			}
		});
	}
	ngOnInit(): void {
		const l = localStorage.getItem('lang');
		if (l === undefined || l === null) {
			localStorage.setItem('lang', 'en');
		}
		if (!window.location.hostname.includes('localhost')) {
			setTimeout(
				() => (this.isBannerVisible = true),
				this.bannerDelayTime * 1000
			);
		} else console.log('Banner Disabled');
		this.http
			.post<string>(environment.apiUrl + '/visitCounter', '', {
				headers: {
					'Content-Type': 'text/plain; charset=utf-8',
				},
			})
			.subscribe();
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

	toggleModal() {
		this.isBannerVisible = false;
	}

	getPageStats(route: string) {
		this.http
			.get<Subheader>(this.subheaderUrl + '/pages' + route)
			.subscribe((data: Subheader) => {
				console.log('Page Stats Data', data);
				this.pageStats = data;
				this.routeService.setPageStats(this.pageStats);
			});
	}

	onOutletLoaded(component: any) {
		console.log('Component', component);

		component.pageStats = this.pageStats;
	}
}
