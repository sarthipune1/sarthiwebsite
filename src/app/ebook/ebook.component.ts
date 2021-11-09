import { Component, OnInit } from '@angular/core';
import books from '../../assets/data/books';
import {
	faEye,
	faArrowAltCircleDown,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'assets/data/environment';
import {
	INotice,
	INoticeStatus,
	NoticeCategory,
} from 'app/notice/notice.component';

@Component({
	selector: 'app-ebook',
	templateUrl: './ebook.component.html',
	styleUrls: ['./ebook.component.scss'],
})
export class EbookComponent implements OnInit {
	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getCategory();
	}
	faIcons = {
		faEye,
		faArrowAltCircleDown,
		faTimes,
	};
	modalVisible: boolean = false;
	currentCategory: string = '';
	public readonly apiUrl: string = apiUrl;

	baseUrl: string = apiUrl + '/department/library';
	categories: NoticeCategory[];
	ebooks: INotice[];

	get books() {
		return books;
	}

	getCategory() {
		this.http
			.get<NoticeCategory[]>(`${this.baseUrl}/category`)
			.subscribe((data) => {
				this.categories = data;
			});
	}

	getBookStatus(createdDate: string, expiryDate: string): INoticeStatus {
		const currentDate = new Date();

		if (expiryDate !== null) {
			const created = new Date(createdDate);
			const expired = new Date(expiryDate);

			if (this.getNoOfDays(currentDate, expired) >= 0) {
				if (this.getNoOfDays(currentDate, created) <= 7) {
					return 'new.png';
				}
			} else {
				return 'closed.png';
			}
		}

		return 'horn.png';
	}

	getNoOfDays(date1: Date, date2: Date): number {
		const diff = Math.abs(date1.getTime() - date2.getTime());
		return diff / (1000 * 60 * 60 * 24);
	}

	toggleModal() {
		this.modalVisible = !this.modalVisible;
	}

	openCategory(category: string) {
		this.currentCategory = category;
		// HTTP call to fetch ebooks
		this.http
			.get<INotice[]>(`${this.baseUrl}?category=${category}`)
			.subscribe((data) => {
				this.ebooks = data.map((v) => {
					return {
						...v,
						categoryTitle: v.category.title,
					};
				});
			});
		this.toggleModal();
	}
}
