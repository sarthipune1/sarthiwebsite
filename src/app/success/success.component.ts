import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
	INotice,
	INoticeStatus,
	NoticeCategory,
} from 'app/notice/notice.component';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';
import { environment } from '../../environments/environment';
import tender from 'assets/data/tender';

@Component({
	selector: 'app-success',
	templateUrl: './success.component.html',
	styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
	strengthData = tender;
	modalVisible: boolean = false;
	currentCategory: string = '';
	faIcons = {
		faTimes,
	};
	public readonly apiUrl: string = environment.apiUrl;
	baseUrl: string = environment.apiUrl + '/success';
	categories: NoticeCategory[];
	tenders: INotice[];

	constructor(private http: HttpClient, private routeService: RouteService) {}

	pageStats: Subheader;

	ngOnInit(): void {
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
		this.getCategory();
	}

	getCategory() {
		this.http
			.get<NoticeCategory[]>(`${this.baseUrl}/category`)
			.subscribe((data) => {
				this.categories = data;
			});
	}

	getTenderStatus(createdDate: string, expiryDate: string): INoticeStatus {
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
		// HTTP call to fetch notices
		this.http
			.get<INotice[]>(`${this.baseUrl}?category=${category}`)
			.subscribe((data) => {
				this.tenders = data.map((v) => {
					return {
						...v,
						categoryTitle: v.category.title,
					};
				});
			});
		this.toggleModal();
	}
}
