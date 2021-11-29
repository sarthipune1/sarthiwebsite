import { Component, OnInit } from '@angular/core';
import books from '../../assets/data/books';
import {
	faEye,
	faArrowAltCircleDown,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
	INotice,
	INoticeStatus,
	NoticeCategory,
} from 'app/notice/notice.component';
import { Subheader } from 'app/subheader/subheader.component';
import { RouteService } from 'app/services/route.service';

@Component({
	selector: 'app-ebook',
	templateUrl: './ebook.component.html',
	styleUrls: ['./ebook.component.scss'],
})
export class EbookComponent implements OnInit {
	constructor(private http: HttpClient, private routeService: RouteService) {}

	pageStats: Subheader;

	ngOnInit(): void {
		// add this line
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
		this.getCategory();
	}
	faIcons = {
		faEye,
		faArrowAltCircleDown,
		faTimes,
	};
	modalVisible: boolean = false;
	currentCategory: string = '';
	public readonly apiUrl: string = environment.apiUrl;

	baseUrl: string = environment.apiUrl + '/department/library';
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
