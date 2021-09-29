import { Component, OnInit } from '@angular/core';
import books from '../../assets/data/books';
import { faEye, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-ebook',
	templateUrl: './ebook.component.html',
	styleUrls: ['./ebook.component.scss'],
})
export class EbookComponent implements OnInit {
	faIcons = {
		faEye,
		faArrowAltCircleDown,
	};

	constructor() {}

	ngOnInit(): void {}

	get books() {
		return books;
	}
}
