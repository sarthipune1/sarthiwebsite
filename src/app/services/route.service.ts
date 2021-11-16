import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subheader } from 'app/subheader/subheader.component';
import { apiUrl } from 'assets/data/environment';

@Injectable({
	providedIn: 'root',
})
export class RouteService {
	private pageStats: Subheader;
	onGetData: EventEmitter<Subheader> = new EventEmitter();

	constructor() {}

	setPageStats(pageStats: Subheader) {
		this.pageStats = pageStats;
		this.onGetData.emit(pageStats);
	}
}
