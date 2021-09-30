import { Component, OnInit } from '@angular/core';
// import * as FullEditor from 'ckeditor5-custom-build-full/build/ckeditor.js';
import * as FullEditor from 'ckeditor5-custom-build/build/ckeditor.js';

@Component({
	selector: 'app-notice',
	templateUrl: './notice.component.html',
	styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
	constructor() {}
	public Editor = FullEditor;

	ngOnInit(): void {}
	noticeData = [
		{
			date: {
				month: 'May',
				date: 31,
			},
			title: 'Memorial day holiday 2021',
			time: '12:00 AM',
		},
		{
			date: {
				month: 'June',
				date: 11,
			},
			title: 'Summer A 2021 classes (4 & 8 week) begins',
			time: '12:00 AM',
		},
		{
			date: {
				month: 'Sep',
				date: 25,
			},
			title: 'Summer A 2022',
			time: '12:00 AM',
		},
		{
			date: {
				month: 'May',
				date: 31,
			},
			title: 'Memorial day holiday 2021',
			time: '12:00 AM',
		},
	];
	strengthData = [
		{
			icon: 'horn.png',
			title: 'UPSC (Civil Services) 2022 Competitive Exam Coaching मुदतवाढ',
			link: 'http://sarthi-maharashtragov.in/en/form/online-application-form-for-cse',
		},
		{
			icon: 'horn.png',
			title: 'MAHARASHTRA ENGINEERING SERVICES (MES) 2021 PROGRAM मुदतवाढ',
			link: 'http://sarthi-maharashtragov.in/en/form/online-application-form-for-mes',
		},
		{
			icon: 'horn.png',
			title: 'Civil Judge Junior Division & Judicial Magistrate First Class Coaching  2021  मुदतवाढ',
			link: 'http://sarthi-maharashtragov.in/en/form/online-application-form-for-cjjd',
		},
		{
			icon: 'horn.png',
			title: 'MPSC Subordinate Services (Non-gazetted)Group -B Combined (PSI,ASO,STI) Exam Coaching 2021 मुदतवाढ',
			link: 'http://sarthi-maharashtragov.in/en/form/online-application-form-for-mpsc',
		},
		{
			icon: 'horn.png',
			title: 'Staff Selection Commission Non Gazetted  Posts Examination Coaching 2021  मुदतवाढ',
			link: 'http://sarthi-maharashtragov.in/en/webform/online_application_form_for_staf',
		},
	];

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
