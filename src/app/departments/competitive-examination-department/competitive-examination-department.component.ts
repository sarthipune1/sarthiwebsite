import { Component, OnInit } from '@angular/core';
import obj from '../../../assets/data/exam';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
	modalVisible: boolean = false;
	currentObjective: string = 'Accounts & Finance';

	exams = [
		{ name: 'केंद्रीय नागरी सेवा स्पधा परीक्षा (UPSC-CSE) कोचिंग' },
		{ name: 'UPSC मुख्य परीक्षा तयारीकरिता आर्थिक सहाय्य उपक्रम' },
		{
			name: 'UPSC मुलाखत/ व्यक्तिमत्व चाचणी परीक्षेच्या पूर्वतयारी करिता आर्थिक सहाय्य उपक्रम (UPSC Interview Sponsorship Program)',
		},
		{
			name: 'MPSC (STATE SERVICE) स्पर्धा परीक्षेच्या पूर्वतयारीसाठी कोचिंग उपक्रम',
		},
		{
			name: 'महाराष्ट्र लोकसेवा आयोगमार्फत आयोजित महाराष्ट्र अभियांत्रिकी सेवा (Maharashtra Engineering Services) स्पर्धा परीक्षा प्रशिक्षण',
		},
		{
			name: 'महाराष्ट्र राज्यसेवा आयोग  मार्फत महाराष्ट्र न्यायिक सेवा -दिवाणी न्यायाधीश कनिष्ठ स्तर व न्यायदंडाधिकारी प्रथम वर्ग  (Civil Judge Junior Division & Judicial Magistrate First Class- CJJD & JMFC) स्पर्धा परीक्षा कोचिंग',
		},
	];
	faIcons = {
		faTimes,
	};

	isArray() {
		const isArray = Array.isArray(this.getObjectiveContent());
		console.log('isArray', isArray);
		return isArray;
	}

	getObjectKeys(obj: object): string[] {
		return Object.keys(obj);
	}

	getObjectiveContent() {
		const objectives = obj[this.currentObjective];
		console.log(objectives);

		return objectives;
	}

	setCurrentObjectives(key: string) {
		this.currentObjective = key;
	}
	getItem(key: object) {
		const l = localStorage.getItem('lang');
		return key[l];
	}
	openModal(key: string) {
		this.currentObjective = key;
		this.toggleModal();
	}

	toggleModal() {
		this.modalVisible = !this.modalVisible;
	}

	constructor() {}

	ngOnInit(): void {}
}
