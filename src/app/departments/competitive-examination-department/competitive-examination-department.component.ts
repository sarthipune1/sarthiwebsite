import { Component, OnInit } from '@angular/core';

export interface Tile {
  text: string;
  sr: number;
  download: any;
}
@Component({
  selector: 'app-competitive-examination-department',
  templateUrl: './competitive-examination-department.component.html',
  styleUrls: ['./competitive-examination-department.component.scss'],
})
export class CompetitiveExaminationDepartmentComponent implements OnInit {
  tiles: Tile[] = [
    { sr: 1, text: '	SARTHI-MPSC Competitive Exam Coaching', download: '' },
    { sr: 2, text: 'SARTHI-UPSC Competitive Exam Coaching', download: '' },
    {
      sr: 3,
      text: 'SARTHI UGC-NET & CSIR-UGC-NET & MH-SET 2019-20',
      download: '',
    },
    { sr: 4, text: 'MPSC Merit Congratulatory Letters', download: '' },
    { sr: 5, text: '	UPSC MPSC Meritorious Candidates', download: '' },
    { sr: 6, text: 'UGC NET-MH SET Meritorious Candidates', download: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
