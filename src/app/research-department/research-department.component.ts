import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-research-department',
  templateUrl: './research-department.component.html',
  styleUrls: ['./research-department.component.scss'],
})
export class ResearchDepartmentComponent implements OnInit {
  tiles: Tile[] = [
    {
      text: 'Fellowship in Humanities, Social Sciences, Sciences, Engineering & Technology',
      cols: 1,
      rows: 1,
      color: 'lightblue',
    },
    { text: 'M. Phil. Ph.D.', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    {
      text: 'Contingency A',
      cols: 1,
      rows: 1,
      color: 'lightblue',
    },
    { text: 'Contingency A', cols: 1, rows: 1, color: 'lightgreen' },
    {
      text: 'Humanities & Social Sciences',
      cols: 1,
      rows: 1,
      color: 'lightpink',
    },
    {
      text: 'Contingency B',
      cols: 1,
      rows: 1,
      color: 'lightblue',
    },
    { text: 'Contingency A', cols: 1, rows: 1, color: 'lightgreen' },
    {
      text: 'Sciences, Engg. & Technology',
      cols: 1,
      rows: 1,
      color: 'lightpink',
    },
    {
      text: 'Escorts / Reader assistance',
      cols: 1,
      rows: 1,
      color: 'lightblue',
    },
    {
      text: '@ Rs. 2000/- p.m. in case of Persons with Disability (दिव्यांगजन) candidates',
      cols: 1,
      rows: 1,
      color: 'lightgreen',
    },
    { text: 'For all disciplines', cols: 1, rows: 1, color: 'lightpink' },
    {
      text: 'HRA',
      cols: 1,
      rows: 1,
      color: 'lightblue',
    },
    { text: 'As per Govt. norms', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'For all disciplines', cols: 1, rows: 1, color: 'lightpink' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
