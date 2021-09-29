import { Component, OnInit } from '@angular/core';
import books from '../../assets/data/books';

@Component({
	selector: 'app-ebook',
	templateUrl: './ebook.component.html',
	styleUrls: ['./ebook.component.scss'],
})
export class EbookComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	get books() {
		return books;
	}
}
