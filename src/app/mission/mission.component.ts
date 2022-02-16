import { Component, OnInit } from '@angular/core';
import obj from '../../assets/data/exam';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subheader } from 'app/subheader/subheader.component';
import { RouteService } from 'app/services/route.service';

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
	selector: 'app-mission',
	templateUrl: './mission.component.html',
	styleUrls: ['./mission.component.scss'],
})
export class MissionComponent implements OnInit {
	modalVisible: boolean = false;
	selectedExam: Exam;
	exams: Exam[] = [];
	baseUrl: string = environment.apiUrl + '/mission';
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