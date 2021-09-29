import { Component, OnInit } from '@angular/core';
import books from '../../../assets/data/books';

@Component({
	selector: 'app-library-department',
	templateUrl: './library-department.component.html',
	styleUrls: ['./library-department.component.scss'],
})
export class LibraryDepartmentComponent implements OnInit {
	constructor() {}

	get books() {
		return books;
	}

	ngOnInit(): void {}
}
