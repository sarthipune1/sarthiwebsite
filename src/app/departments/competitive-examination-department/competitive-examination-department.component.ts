import { Component, OnInit } from '@angular/core';
import obj from '../../../assets/data/exam';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'assets/data/environment';

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
	selector: 'app-competitive-examination-department',
	templateUrl: './competitive-examination-department.component.html',
	styleUrls: ['./competitive-examination-department.component.scss'],
})
export class CompetitiveExaminationDepartmentComponent implements OnInit {
	modalVisible: boolean = false;
	selectedExam: Exam;
	exams: Exam[] = [];
	baseUrl: string = apiUrl + '/department/exams';
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

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getExams();
	}

	getExams() {
		this.http.get<Exam[]>(this.baseUrl).subscribe((data) => {
			this.exams = data;
		});
	}
}
