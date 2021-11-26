import { Component, OnInit } from '@angular/core';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';

@Component({
	selector: 'app-main-objectives',
	templateUrl: './main-objectives.component.html',
	styleUrls: ['./main-objectives.component.scss'],
})
export class MainObjectivesComponent implements OnInit {
	objectives: [{ title: 'ABC' }];

	constructor(private routeService: RouteService) {}

	pageStats: Subheader;

	ngOnInit(): void {
		// add this line
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
	}
}
