import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
	faFileInvoiceDollar,
	faUserLock,
	faTractor,
	faLayerGroup,
	faUsers,
	faBook,
	faSchool,
	faSearchDollar,
	faBookOpen,
	faFemale,
	faChild,
	faBookReader,
	faUpload,
	faHandHoldingHeart,
	faBuilding,
	faSign,
	faSplotch,
	faDharmachakra,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
	faPhoenixFramework,
	faAdversal,
} from '@fortawesome/free-brands-svg-icons';
import obj from '../../assets/data/objectives';
import announcements from 'assets/data/announcements';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	modalVisible: boolean = false;
	currentObjective: string = 'Accounts & Finance';
	videoPlayerEnded: boolean = false;
	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		navSpeed: 100,
		fluidSpeed: true,
		lazyLoad: true,
		navText: ['', ''],
		animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			740: {
				items: 1,
			},
			940: {
				items: 1,
			},
		},
		nav: true,
	};
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
	strengthData = announcements;

	mahaGov = [
		{
			image: 'chief_minister.jpg',
			name: {
				en: 'Shri Uddhav Thakare',
				mr: 'श्री उद्धवजी ठाकरे',
			},
			position: {
				en: "Hon'ble Chief Minister",
				mr: 'माननीय मुख्यमंत्री',
			},
		},
		{
			image: 'deputy_chief_minister.jpg',
			name: {
				en: 'Shri Ajit Pawar',
				mr: 'श्री अजित पवार',
			},
			position: {
				en: "Hon'ble Deputy Chief Minister",
				mr: 'माननीय उपमुख्यमंत्री',
			},
		},
		// {
		// 	image: 'pwd_minister.jpg',
		// 	name: {
		// 		en: 'Shri Ashok Chavan',
		// 		mr: 'श्री अशोक चव्हाण',
		// 	},
		// 	position: {
		// 		en: "Hon'ble PWD Minister",
		// 		mr: 'माननीय पीडब्ल्यूडी मंत्री',
		// 	},
		// },
	];
	faIcons = {
		faTimes,
	};

	objectives = [
		{
			icon: faFileInvoiceDollar,
			name: {
				en: 'Accounts & Finance',
				mr: 'लेखा आणि वित्त',
			},
		},
		{
			icon: faUserLock,
			name: {
				en: 'Administration',
				mr: 'प्रशासन',
			},
		},
		{
			icon: faTractor,
			name: {
				en: 'Agricultural',
				mr: 'कृषी',
			},
		},
		{
			icon: faLayerGroup,
			name: {
				en: 'Skill Development',
				mr: 'कौशल्य विकास',
			},
		},
		{
			icon: faUsers,
			name: {
				en: 'CSR',
				mr: 'CSR',
			},
		},
		{
			icon: faBook,
			name: {
				en: 'Knowledge Bank',
				mr: 'नॉलेज बँक',
			},
		},
		{
			icon: faSchool,
			name: {
				en: 'Education',
				mr: 'शिक्षण',
			},
		},
		{
			icon: faSearchDollar,
			name: {
				en: 'Research',
				mr: 'संशोधन',
			},
		},
		{
			icon: faBookOpen,
			name: {
				en: 'Competitive Exam',
				mr: 'स्पर्धा परीक्षा',
			},
		},
		{
			icon: faFemale,
			name: {
				en: 'Women Empowerment',
				mr: 'महिला सबलीकरण',
			},
		},
		{
			icon: faChild,
			name: {
				en: 'Youth Leadership / Development',
				mr: 'युवा नेतृत्व/ विकास',
			},
		},
		{
			icon: faBookReader,
			name: {
				en: 'Library',
				mr: 'ग्रंथालय',
			},
		},
		{
			icon: faUpload,
			name: {
				en: 'Production & Publication',
				mr: 'उत्पादन आणि प्रकाशन',
			},
		},
		{
			icon: faHandHoldingHeart,
			name: {
				en: 'Senior Citizen Care',
				mr: 'ज्येष्ठ नागरिक काळजी',
			},
		},
		{
			icon: faBuilding,
			name: {
				en: 'Infrastructure Development',
				mr: 'पायाभूत सुविधा विकास',
			},
		},
		{
			icon: faSign,
			name: {
				en: 'Human Resource / Establishment',
				mr: 'मानव संसाधन / आस्थापना',
			},
		},
		{
			icon: faAdversal,
			name: {
				en: 'Advertisement & Publicity',
				mr: 'जाहिरात आणि प्रसिद्धी',
			},
		},
		{
			icon: faPhoenixFramework,
			name: {
				en: 'Pilot Projects',
				mr: 'पायलट प्रकल्प',
			},
		},
		{
			icon: faDharmachakra,
			name: {
				en: 'Defence & Judiciary Coaching',
				mr: 'संरक्षण आणि न्यायिक प्रशिक्षण',
			},
		},
	];

	getObjectiveContent() {
		const objectives = obj[this.currentObjective];

		return objectives;
	}

	isArray() {
		const isArray = Array.isArray(this.getObjectiveContent());
		return isArray;
	}

	setCurrentObjectives(key: string) {
		this.currentObjective = key;
	}
	getItem(key: object): string {
		const l = localStorage.getItem('lang');
		return key[l];
	}

	getObjectKeys(obj: object): string[] {
		return Object.keys(obj);
	}

	content = {
		about: {
			en: 'About',
			mr: 'सारथी',
		},
		sarthi: {
			en: 'SARTHI',
			mr: 'विषयी',
		},
		description: {
			en: `Chhatrapati Shahu Maharaj Research Training and Human Development Institute (SARTHI), Pune is registered under
      Company Act, 2013 under Section 8 as Non-Profit government company for research, policy advocacy, training etc.
      for socio-economic and education
      development of Maratha, Maratha-Kunbi, Kunbi-Maratha, Kunbi community in Maharashtra State. Our organisation
      thrust areas includes research, policy advocacy to government, training etc. and guidance to rural population,
      particularly the farmers
      whose livelihood is dependent on agriculture.`,
			mr: `छत्रपती शाहू महाराज संशोधन, प्रशिक्षण व मानव विकास संस्था (सारथी), पुणे ही संस्था कंपनी कायदा, 2013 अंतर्गत कलम 8 अन्वये नॉन-प्रॉफिट सरकारी कंपनी म्हणून स्थापन आहे. सारथीची स्थापना मराठा, मराठा-कुणबी, कुणबी-मराठा, कुणबी समुदाय आणि महाराष्ट्रातील कृषीवर अवलंबून असलेल्या कुटुंबांचे सामाजिक-आर्थिक आणि शैक्षणिक विकास करण्यासाठी आणि आमच्या संस्थेमध्ये जोरदार क्षेत्रांचा समावेश आहे, संशोधन, सरकारची धोरणे, प्रशिक्षण इ. आणि ग्रामीण जनतेस मार्गदर्शन करणे.`,
		},
		read_more: {
			en: 'Read More',
			mr: 'Read More',
		},
		objectives: {
			desc: {
				en: `Organizing various competitions and other events for the students of various levels and grant Awards, Prizes,
            Citations, etc. to the deserving students, with an aim to inspire the youngsters to become better citizens of India.
            Undertake and implement
            special and pilot projects such as ‘Kisan Mitra’, Kaushalya Vikas Doot, Tara Doot (Women Empowerment Doot), Sant
            Gadge Baba Doot (Swacchata & Vyasan Mukti Doot), Sanvidhan Doot, Savitri Doot, etc. from time to time, for creating
            awareness on various
            issues.`,
				mr: `छत्रपती शाहू महाराज संशोधन, प्रशिक्षण व मानव विकास संस्था (सारथी), पुणे ही संस्था कंपनी कायदा, 2013 अंतर्गत कलम 8 अन्वये नॉन-प्रॉफिट सरकारी कंपनी म्हणून स्थापन आहे. सारथीची स्थापना मराठा, मराठा-कुणबी, कुणबी-मराठा, कुणबी समुदाय आणि महाराष्ट्रातील कृषीवर अवलंबून असलेल्या कुटुंबांचे सामाजिक-आर्थिक आणि शैक्षणिक विकास करण्यासाठी आणि आमच्या संस्थेमध्ये जोरदार क्षेत्रांचा समावेश आहे, संशोधन, सरकारची धोरणे, प्रशिक्षण इ. आणि ग्रामीण जनतेस मार्गदर्शन करणे.`,
			},
			main: {
				en: 'Main',
				mr: 'प्रमुख',
			},
			title: {
				en: 'Objectives',
				mr: 'उद्दिष्टें',
			},
		},
	};

	openModal(key: string) {
		this.currentObjective = key;
		this.toggleModal();
	}

	toggleModal() {
		this.modalVisible = !this.modalVisible;
	}

	@ViewChild('videoPlayer') videoplayer: ElementRef;

	toggleVideo(event: any) {
		this.videoplayer.nativeElement.play();
	}

	hideVideo() {
		this.videoPlayerEnded = true;
	}

	constructor() {}

	ngOnInit(): void {
		setTimeout(() => this.hideVideo(), 26 * 1000);
	}
}
