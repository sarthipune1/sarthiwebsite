import { Component, OnInit } from '@angular/core';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';
import books from '../../../assets/data/books';

@Component({
	selector: 'app-library-department',
	templateUrl: './library-department.component.html',
	styleUrls: ['./library-department.component.scss'],
})
export class LibraryDepartmentComponent implements OnInit {
	constructor(private routeService: RouteService) {}

	get books() {
		return books;
	}

	pageStats: Subheader;

	ngOnInit(): void {
		// add this line
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
	}
}
