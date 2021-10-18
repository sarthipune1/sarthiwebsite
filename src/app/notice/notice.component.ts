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
	strengthData = [
		{
			icon: 'new.png',
			title: '(Date Extended till 18th Oct 2021) MPSC MAINS 2020 Sponsorship (for MPSC Prelims 2020 Pass Candidates)',
			link: 'https://docs.google.com/forms/d/e/1FAIpQLSd5XH-nTUNGJWGcaDtvl_19oTi5ex1n6THwh8klH3oc3y0bdA/viewform?usp=sf_link',
		},
		{
			icon: 'horn.png',
			title: 'Guidelines',
			link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/GUIDELINES%20FOR%20APPLICANTS_2.pdf',
		},
		{
			icon: 'horn.png',
			title: 'महत्त्वाच्या सूचना',
			link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/%E0%A4%AE%E0%A4%B9%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%20%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE_2.pdf',
		},
		{
			icon: 'horn.png',
			title: 'Checklist',
			link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/CHECKLIST%20-MPSC%20MAINS%20SPONSORSHIP_2.pdf',
		},
		{
			icon: 'horn.png',
			title: 'Candidate Undertaking',
			link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/CANDIDATE%20UNDERTAKING_1.pdf',
		},
		{
			icon: 'horn.png',
			title: 'Model Code of Conduct',
			link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/MODEL%20CODE%20OF%20CONDUCT%20-MPSC%20MAINS%20SPONSORSHIP_0.pdf',
		},
		{
			icon: 'horn.png',
			title: 'UPSC (Civil Services) 2022 Competitive Exam Coaching मुदतवाढ',
			link: 'http://old.sarthi-maharashtragov.in/en/form/online-application-form-for-cse',
		},
		{
			icon: 'horn.png',
			title: 'MAHARASHTRA ENGINEERING SERVICES (MES) 2021 PROGRAM मुदतवाढ',
			link: 'http://old.sarthi-maharashtragov.in/en/form/online-application-form-for-mes',
		},
		{
			icon: 'horn.png',
			title: 'Civil Judge Junior Division & Judicial Magistrate First Class Coaching  2021  मुदतवाढ',
			link: 'http://old.sarthi-maharashtragov.in/en/form/online-application-form-for-cjjd',
		},
		{
			icon: 'horn.png',
			title: 'MPSC Subordinate Services (Non-gazetted)Group -B Combined (PSI,ASO,STI) Exam Coaching 2021 मुदतवाढ',
			link: 'http://old.sarthi-maharashtragov.in/en/form/online-application-form-for-mpsc',
		},
		{
			icon: 'horn.png',
			title: 'Staff Selection Commission Non Gazetted  Posts Examination Coaching 2021  मुदतवाढ',
			link: 'http://old.sarthi-maharashtragov.in/en/webform/online_application_form_for_staf',
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
