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
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface IGallery {
	id: number;
	filename: string;
	originalName: string;
	type: string;
	createdAt: Date;
	updatedAt: Date;
	enabled?: boolean;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	modalVisible: boolean = false;
	currentObjective: string = 'Accounts & Finance';
	photoGallery: IGallery[] = [];
	apiUrl = environment.apiUrl;
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
		navText: ['&#8249', '&#8250;'],
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
	customOptionsBrand: OwlOptions = {
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
		navText: ['&#8249', '&#8250;'],
		animateOut: 'fadeOut',
		items: 3,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 2,
			},
			740: {
				items: 3,
			},
			940: {
				items: 3,
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

	brandsCarousel = [
		{
			url: 'https://www.india.gov.in/',
			image: 'img1.png',
		},
		{
			url: 'https://aaplesarkar.mahaonline.gov.in/en',
			image: 'img2.png',
		},
		{
			url: 'https://www.maharashtra.gov.in/1145/Government-Resolutions',
			image: 'img3.png',
		},
		{
			url: 'https://rtionline.gov.in/',
			image: 'img4.png',
		},
	];

	mahaGov = [
		{
			image: 'governor.jpg',
			name: {
				en: 'Shri Bhagat Singh Koshyari',
				mr: 'श्री भगत सिंह कोश्यारी',
			},
			position: {
				en: "Hon'ble Governor of Maharashtra",
				mr: 'माननीय महाराष्ट्राचे राज्यपाल',
			},
		},
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
			en: `सारथी विषयी
छत्रपती शाहू महाराज संशोधन प्रशिक्षण व मानव विकास संस्था, (सारथी), पुणे ही महाराष्ट्र शासनाची नियोजन विभागाच्या अधिपत्याखालील दिनांक 25 जून, 2018 रोजी  “कंपनी कायदा 2013 च्या कलम 8” अन्वये  स्थापन करण्यात आलेली  महाराष्ट्र राज्यातील नॉन-प्रॉफ़िट कंपणी आहे. महाराष्ट्र राज्यातील मराठा , कुणबी, कुणबी-मराठा, मराठा-कुणबी या लक्षित गटातील समाजाच्या सामाजिक, आर्थिक व शैक्षणिक विकासाकरीता या कंपणीची स्थापणा करण्यात आली आहे.`,
			mr: `सारथी विषयी
छत्रपती शाहू महाराज संशोधन प्रशिक्षण व मानव विकास संस्था, (सारथी), पुणे ही महाराष्ट्र शासनाची नियोजन विभागाच्या अधिपत्याखालील दिनांक 25 जून, 2018 रोजी  “कंपनी कायदा 2013 च्या कलम 8” अन्वये  स्थापन करण्यात आलेली  महाराष्ट्र राज्यातील नॉन-प्रॉफ़िट कंपणी आहे. महाराष्ट्र राज्यातील मराठा , कुणबी, कुणबी-मराठा, मराठा-कुणबी या लक्षित गटातील समाजाच्या सामाजिक, आर्थिक व शैक्षणिक विकासाकरीता या कंपणीची स्थापणा करण्यात आली आहे.`,
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
		hq_video: {
			en: 'Sarthi HQ Proposed building',
			mr: 'सारथी मुख्यालय प्रस्तावित इमारत',
		},
		interactiveEApplication: {
			en: 'Interactive E-App',
			mr: 'इंटरएक्टिव ई एप्',
		},
		membershipLogin: {
			en: 'Memebership Login',
			mr: 'सदस्यता लॉगिन',
		},
		tender: {
			en: 'Tender',
			mr: 'निविदा',
		},
		success: {
			en: 'Success Stories',
			mr: 'यशोगाथा',
		},
		notices: {
			en: 'Notice Board',
			mr: 'सूचना फलक',
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

	constructor(private http: HttpClient, private routeService: RouteService) {}

	pageStats: Subheader;

	ngOnInit(): void {
		// add this line
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
		this.getPhotoGallery();
		setTimeout(() => this.hideVideo(), 26 * 1000);
	}

	getPhotoGallery() {
		this.http
			.get<IGallery[]>(`${environment.apiUrl}/gallery`)
			.subscribe((data) => {
				console.log(data);
				this.photoGallery = data;
			});
	}

	//Lightbox
	settings = {
		counter: false,
		plugins: [lgZoom],
	};
	onBeforeSlide = (detail: BeforeSlideDetail): void => {
		const { index, prevIndex } = detail;
		console.log(index, prevIndex);
	};
}
