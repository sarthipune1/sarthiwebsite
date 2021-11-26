import { Component, OnInit } from '@angular/core';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';

@Component({
	selector: 'app-caste-certificate',
	templateUrl: './caste-certificate.component.html',
	styleUrls: ['./caste-certificate.component.scss'],
})
export class CasteCertificateComponent implements OnInit {
	constructor(private routeService: RouteService) {}

	pageStats: Subheader;
	ngOnInit(): void {
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
	}
}
