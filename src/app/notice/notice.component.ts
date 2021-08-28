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
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      icon: 'announcements.png',
      title: '6th semester result out!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
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
      toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side'],
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
