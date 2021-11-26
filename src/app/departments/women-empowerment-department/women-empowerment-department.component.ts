import { Component, OnInit } from '@angular/core';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';

@Component({
	selector: 'app-women-empowerment-department',
	templateUrl: './women-empowerment-department.component.html',
	styleUrls: ['./women-empowerment-department.component.scss'],
})
export class WomenEmpowermentDepartmentComponent implements OnInit {
	constructor(private routeService: RouteService) {}

	pageStats: Subheader;

	ngOnInit(): void {
		// add this line
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
	}
}
