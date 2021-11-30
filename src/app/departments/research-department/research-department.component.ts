// import { Component, OnInit } from '@angular/core';
// import { RouteService } from 'app/services/route.service';
// import { Subheader } from 'app/subheader/subheader.component';

// export interface Tile {
// 	color: string;
// 	cols: number;
// 	rows: number;
// 	text: string;
// }
// @Component({
// 	selector: 'app-research-department',
// 	templateUrl: './research-department.component.html',
// 	styleUrls: ['./research-department.component.scss'],
// })
// export class ResearchDepartmentComponent implements OnInit {
// 	tiles: Tile[] = [
// 		{
// 			text: 'Fellowship in Humanities, Social Sciences, Sciences, Engineering & Technology',
// 			cols: 1,
// 			rows: 1,
// 			color: 'lightblue',
// 		},
// 		{ text: 'M. Phil. Ph.D.', cols: 1, rows: 1, color: 'lightgreen' },
// 		{ text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
// 		{
// 			text: 'Contingency A',
// 			cols: 1,
// 			rows: 1,
// 			color: 'lightblue',
// 		},
// 		{ text: 'Contingency A', cols: 1, rows: 1, color: 'lightgreen' },
// 		{
// 			text: 'Humanities & Social Sciences',
// 			cols: 1,
// 			rows: 1,
// 			color: 'lightpink',
// 		},
// 		{
// 			text: 'Contingency B',
// 			cols: 1,
// 			rows: 1,
// 			color: 'lightblue',
// 		},
// 		{ text: 'Contingency A', cols: 1, rows: 1, color: 'lightgreen' },
// 		{
// 			text: 'Sciences, Engg. & Technology',
// 			cols: 1,
// 			rows: 1,
// 			color: 'lightpink',
// 		},
// 		{
// 			text: 'Escorts / Reader assistance',
// 			cols: 1,
// 			rows: 1,
// 			color: 'lightblue',
// 		},
// 		{
// 			text: '@ Rs. 2000/- p.m. in case of Persons with Disability (दिव्यांगजन) candidates',
// 			cols: 1,
// 			rows: 1,
// 			color: 'lightgreen',
// 		},
// 		{ text: 'For all disciplines', cols: 1, rows: 1, color: 'lightpink' },
// 		{
// 			text: 'HRA',
// 			cols: 1,
// 			rows: 1,
// 			color: 'lightblue',
// 		},
// 		{ text: 'As per Govt. norms', cols: 1, rows: 1, color: 'lightgreen' },
// 		{ text: 'For all disciplines', cols: 1, rows: 1, color: 'lightpink' },
// 	];
// 	constructor(private routeService: RouteService) {}

// 	pageStats: Subheader;

// 	ngOnInit(): void {
// 		// add this line
// 		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
// 			this.pageStats = pageStats;
// 		});
// 	}
// }

import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';
export interface Tile {
	text: string;
	sr: number;
	download: any;
}

interface Exam {
	id: number;
	title: string;
	content: string;
}

@Component({
	selector: 'app-research-department',
	templateUrl: './research-department.component.html',
	styleUrls: ['./research-department.component.scss'],
})
export class ResearchDepartmentComponent implements OnInit {
	modalVisible: boolean = false;
	selectedExam: Exam;
	exams: Exam[] = [];
	baseUrl: string = environment.apiUrl + '/department/research';
	faIcons = {
		faTimes,
	};

	openModal(exam: Exam) {
		this.selectedExam = exam;
		this.toggleModal();
	}

	toggleModal() {
		this.modalVisible = !this.modalVisible;
	}

	constructor(private http: HttpClient, private routeService: RouteService) {}

	pageStats: Subheader;
	ngOnInit(): void {
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});

		this.getExams();
	}

	getExams() {
		this.http.get<Exam[]>(this.baseUrl).subscribe((data) => {
			this.exams = data;
		});
	}
}
