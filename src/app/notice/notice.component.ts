import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },{
      icon: "announcements.png",
      title: '6th semester result out!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },

  ];

}
