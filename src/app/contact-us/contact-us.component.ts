import { Component, OnInit } from '@angular/core';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';

@Component({
	selector: 'app-contact-us',
	templateUrl: './contact-us.component.html',
	styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
	constructor(private routeService: RouteService) {}

	pageStats: Subheader;
	ngOnInit(): void {
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
	}
}
