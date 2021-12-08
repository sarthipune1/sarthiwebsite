import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';
import { environment } from 'environments/environment';

export interface IAwards {
	id: number;
	title: string;
	link: string;
	url: string;
	createdAt: string;
	updatedAt: string;
}

@Component({
	selector: 'app-awards',
	templateUrl: './awards.component.html',
	styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent implements OnInit {
	constructor(private http: HttpClient, private routeService: RouteService) {}

	pageStats: Subheader;
	awards: IAwards[] = [];

	get url() {
		return environment.apiUrl;
	}
	private readonly baseUrl: string = this.url + '/' + 'awards';
	ngOnInit(): void {
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
		this.getAwards();
	}

	getAwards() {
		this.http.get<IAwards[]>(this.baseUrl).subscribe((awards) => {
			this.awards = awards;
		});
	}
}
