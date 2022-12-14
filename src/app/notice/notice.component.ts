import { Component, Input, OnInit } from '@angular/core';
// import * as FullEditor from 'ckeditor5-custom-build-full/build/ckeditor.js';
import * as FullEditor from 'ckeditor5-custom-build/build/ckeditor.js';
// import announcements from 'assets/data/announcements';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';

export interface NoticeCategory {
	id: number;
	title: string;
	expiry: string;
	createdAt: string;
	updatedAt: string;
}

export interface INotice {
	id: number;
	title: string;
	link: string;
	url: string;
	expiry: string;
	category: NoticeCategory;
	categoryTitle: string;
	createdAt: string;
	updatedAt: string;
}

export type INoticeStatus = 'new.png' | 'closed.png' | 'horn.png';

@Component({
	selector: 'app-notice',
	templateUrl: './notice.component.html',
	styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
	constructor(private http: HttpClient, private routeService: RouteService) {}

	@Input('isHome') isHome: boolean = false;
	pageStats: Subheader;

	ngOnInit(): void {
		// add this line
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
		this.getCategory();
	}
	modalVisible: boolean = false;

	currentCategory: string = '';
	faIcons = {
		faTimes,
	};
	public Editor = FullEditor;

	public readonly apiUrl: string = environment.apiUrl;

	baseUrl: string = environment.apiUrl + '/notices';
	categories: NoticeCategory[];
	notices: INotice[];

	getCategory() {
		this.http
			.get<NoticeCategory[]>(`${this.baseUrl}/category`)
			.subscribe((data) => {
				this.categories = data;
			});
	}

	getNoticeStatus(createdDate: string, expiryDate: string): INoticeStatus {
		const currentDate = new Date();

		if (expiryDate !== null) {
			// const created = new Date(createdDate);
			const created = new Date();
			const expired = new Date(expiryDate);

			if (this.getNoOfDays(expired, currentDate) >= 0) {
				return 'new.png';
			} else {
				return 'closed.png';
			}
		}

		return 'horn.png';
	}

	getNoOfDays(date1: Date, date2: Date): number {
		const diff = date1.getTime() - date2.getTime();
		return diff / (1000 * 60 * 60 * 24);
	}
	noticeData = [
		{
			date: {
				month: 'October',
				date: 2,
			},
			title: 'Mahatma Gandhi Jayanti',
			time: '12:00 AM',
		},
		{
			date: {
				month: 'October',
				date: 15,
			},
			title: 'Dussehra (Vijay Dashmi)',
			time: '12:00 AM',
		},
		{
			date: {
				month: 'November',
				date: 4,
			},
			title: 'Diwali (Deepavali)',
			time: '12:00 AM',
		},
		{
			date: {
				month: 'December',
				date: 25,
			},
			title: 'Christmas Day',
			time: '12:00 AM',
		},
	];

	toggleModal() {
		this.modalVisible = !this.modalVisible;
	}

	openCategory(category: string) {
		this.currentCategory = category;
		// HTTP call to fetch notices
		this.http
			.get<INotice[]>(`${this.baseUrl}?category=${category}`)
			.subscribe((data) => {
				this.notices = data.map((v) => {
					return {
						...v,
						categoryTitle: v.category.title,
					};
				});
			});
		this.toggleModal();
	}
	// strengthData = announcements;

	editorConfig = {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'link',
				'bulletedList',
				'numberedList',
				'|',
				'outdent',
				'indent',
				'|',
				'imageUpload',
				'blockQuote',
				'insertTable',
				'mediaEmbed',
				'undo',
				'redo',
				'CKFinder',
				'alignment',
				'fontBackgroundColor',
				'fontColor',
				'fontSize',
				'fontFamily',
				'highlight',
				'ChemType',
				'MathType',
				'specialCharacters',
				'strikethrough',
				'subscript',
				'superscript',
				'todoList',
				'underline',
			],
		},
		language: 'en',
		image: {
			toolbar: [
				'imageTextAlternative',
				'imageStyle:full',
				'imageStyle:side',
			],
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableCellProperties',
				'tableProperties',
			],
		},
		licenseKey: '',
	};
}
