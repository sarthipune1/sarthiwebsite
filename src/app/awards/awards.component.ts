import { Component, OnInit } from '@angular/core';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';

@Component({
	selector: 'app-awards',
	templateUrl: './awards.component.html',
	styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent implements OnInit {
	pageStats: Subheader;
	constructor(private routeService: RouteService) {}

	ngOnInit(): void {
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
	}
}
