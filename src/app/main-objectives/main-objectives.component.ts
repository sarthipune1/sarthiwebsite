import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-objectives',
  templateUrl: './main-objectives.component.html',
  styleUrls: ['./main-objectives.component.scss'],
})
export class MainObjectivesComponent implements OnInit {
  objectives: [{ title: 'ABC' }];

  constructor() {}

  ngOnInit(): void {}
}
