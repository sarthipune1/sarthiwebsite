import { Component, OnInit } from '@angular/core';
import tender from 'assets/data/tender';

@Component({
	selector: 'app-tender',
	templateUrl: './tender.component.html',
	styleUrls: ['./tender.component.scss'],
})
export class TenderComponent implements OnInit {
	strengthData = tender;

	constructor() {}

	ngOnInit(): void {}
}
