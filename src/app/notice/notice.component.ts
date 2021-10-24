import { Component, OnInit } from '@angular/core';
// import * as FullEditor from 'ckeditor5-custom-build-full/build/ckeditor.js';
import * as FullEditor from 'ckeditor5-custom-build/build/ckeditor.js';
import announcements from 'assets/data/announcements';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-notice',
	templateUrl: './notice.component.html',
	styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
	modalVisible: boolean = false;

	currentCategory: string = '';
	getCategoryContent = [
		{
			icon: 'new.png',
			category:
				'MPSC (STATE SERVICES) 2021-22 COACHING FIRST WAITING LIST',
			title: 'MPSC (STATE SERVICES) 2021-22 COACHING FIRST WAITING LIST',
			link: 'http://old.sarthi-maharashtragov.in/en/node/4',
		},
		{
			icon: 'new.png',
			category:
				'UPSC (Civil Services) 2022 Competitive Exam Coaching मुदतवाढ',
			title: 'UPSC (Civil Services) 2022 Competitive Exam Coaching मुदतवाढ',
			link: 'assets/files/UPSC 2022.pdf',
		},
		{
			icon: 'new.png',
			category:
				'MAHARASHTRA ENGINEERING SERVICES (MES) 2021 PROGRAM मुदतवाढ',
			title: 'MAHARASHTRA ENGINEERING SERVICES (MES) 2021 PROGRAM मुदतवाढ',
			link: 'assets/files/CJJD & JMFC.pdf',
		},
	];
	faIcons = {
		faTimes,
	};
	constructor() {}
	public Editor = FullEditor;

	ngOnInit(): void {}
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
		this.toggleModal();
	}
	strengthData = announcements;

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
