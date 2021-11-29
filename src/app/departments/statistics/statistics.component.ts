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
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
	public saleData: any = [
		{ name: 'Jan', value: 105000 },
		{ name: 'Feb', value: 55000 },
		{ name: 'Mar', value: 15000 },
		{ name: 'Apr', value: 150000 },
		{ name: 'May', value: 20000 },
		{ name: 'Jun', value: 25000 },
		{ name: 'July', value: 30000 },
		{ name: 'Aug', value: 60000 },
		{ name: 'Sep', value: 20000 },
		{ name: 'Oct', value: 15000 },
		{ name: 'Nov', value: 35000 },
		{ name: 'Dec', value: 1000 },
	];

	viewPort: any = [window.innerWidth / 1.5, window.innerHeight / 1.5];

	modalVisible: boolean = false;
	selectedExam: Exam;
	exams: Exam[] = [];
	baseUrl: string = environment.apiUrl + '/department/statistics';
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
		// add this line
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
