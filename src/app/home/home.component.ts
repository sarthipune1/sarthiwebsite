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
छत्रपती शाहू महाराज संशोधन प्रशिक्षण व मानव विकास संस्था, (सारथी), पुणे ही महाराष्ट्र शासनाची नियोजन विभागाच्या अधिपत्याखालील दिनांक 25 जून, 2018 रोजी  “कंपनी कायदा 2013 च्या कलम 8” अन्वये  स्थापन करण्यात आलेली  महाराष्ट्र राज्यातील नॉन-प्रॉफ़िट कंपणी आहे. महाराष्ट्र राज्यातील मराठा , कुणबी, कुणबी-मराठा, मराठा-कुणबी या लक्षित गटातील समाजाच्या सामाजिक, आर्थिक व शैक्षणिक विकासाकरीता या कंपणीची स्थापणा करण्यात आली आहे.
महाराष्ट्र राज्यातील मराठा , कुणबी, कुणबी-मराठा, मराठा-कुणबी या लक्षित गटातील समाजाची  सामाजिक शैक्षणिक व आर्थिक परिस्थिती सुधारण्यासाठी विविध सर्वेक्षण घेऊन कृती संशोधनाकरीता मूल्यमापन करणे व कार्यक्रमांच्या अंमलबजावणी करण्याची आवश्यकता आहे.
संस्थेची स्थापनेमागील उद्दिष्टांचा विचार करत्त लक्षित गटाला सामाजिक शैक्षणिक व आर्थिक विकासासाठी संशोधनासाठी माहितीचे संकलन व पृथ्थ्करण करणारी “शिखर संस्था ” म्हणून सारथी संस्था कार्यरत आहे. लक्षित गटाच्या समाजातील विविध समस्यावर जण-जागृती करून विशेष व पथदर्शी प्रकल्प वेळोवेळी हाती घेण्यात येत आहे. सद्यस्थितीत लक्षित गटातील इच्छुक विद्यार्थ्यांना सारथी संस्थेमार्फत “पोलीस भरती” करीता निशुल्क ऑनलाईन प्रशिक्षण देण्यात आले आहे. त्याचप्रमाणे छत्रपती शाहू महाराज संशोधन शिष्यवृत्ती अंतर्गत एम. फ़िल.व छत्रपती शाहू महाराज राष्ट्रीय संशोधन शिष्यवृत्ती अंतर्गत पी.एच.डी. करणा-या विद्यार्थ्यांना शिष्यवृत्ती देण्यात येत आहे. छत्रपती शिवाजी महाराज स्मृती ग्रंथाच्या 50000 प्रतिची छपाई बालभारती या संस्थेच्या माध्यमातून करण्यात येत आहे.तसेच लक्षित गटातील इच्छुक विद्यार्थ्यांना महाराष्ट्र राज्य लोकसेवा आयोग व केंद्रीय लोकसेवा आयोग परीक्षा उत्तीर्ण होण्याच्या दृष्टीने परिक्षेच्या तयारीसाठी विद्यावेतन देण्यात येत आहे. केंद्रीय लोकसेवा आयोगाची “मुख्य परीक्षा 2020” करिता लक्षित गटातील 59 विद्यार्थ्यांची झूम मीटिंग च्या माध्यमातून मुलाखत तयारी व अभिरूप मुलाखती घेण्यात आल्या आहेत. महाराष्ट्र लोकसेवा आयोगाच्या दुय्यम सेवा गट ब (अराजपत्रित) परीक्षेसाठी लक्षित गटातील विद्यार्थ्यांना निशुल्क ऑनलाईन प्रशिक्षण सारथी संस्थेमार्फत देण्यात येणार आहे. महाराष्ट्र अभियांत्रिकी सेवा स्पर्धा परीक्षा तयारीकरिता 250 विद्यार्थ्यांची निवड करण्याची प्रक्रिया सद्यस्थितीत चालू आहे.कर्मचारी निवड आयोग मार्फत अराजपत्रित पदांच्या स्पर्धा परीक्षेला बसलेल्या लक्षित गटातील विद्यार्थ्यांसाठी ऑनलाईन प्रशिक्षण घेण्याची कार्यवाही चालू आहे. कौशल्य विकास प्रशिक्षण कार्यक्रम संपूर्ण राज्यभर संस्थेच्या माध्यमातून राबविण्याची कार्यवाही सुरू आहे..`,
			mr: `सारथी विषयी
छत्रपती शाहू महाराज संशोधन प्रशिक्षण व मानव विकास संस्था, (सारथी), पुणे ही महाराष्ट्र शासनाची नियोजन विभागाच्या अधिपत्याखालील दिनांक 25 जून, 2018 रोजी  “कंपनी कायदा 2013 च्या कलम 8” अन्वये  स्थापन करण्यात आलेली  महाराष्ट्र राज्यातील नॉन-प्रॉफ़िट कंपणी आहे. महाराष्ट्र राज्यातील मराठा , कुणबी, कुणबी-मराठा, मराठा-कुणबी या लक्षित गटातील समाजाच्या सामाजिक, आर्थिक व शैक्षणिक विकासाकरीता या कंपणीची स्थापणा करण्यात आली आहे.
महाराष्ट्र राज्यातील मराठा , कुणबी, कुणबी-मराठा, मराठा-कुणबी या लक्षित गटातील समाजाची  सामाजिक शैक्षणिक व आर्थिक परिस्थिती सुधारण्यासाठी विविध सर्वेक्षण घेऊन कृती संशोधनाकरीता मूल्यमापन करणे व कार्यक्रमांच्या अंमलबजावणी करण्याची आवश्यकता आहे.
संस्थेची स्थापनेमागील उद्दिष्टांचा विचार करत्त लक्षित गटाला सामाजिक शैक्षणिक व आर्थिक विकासासाठी संशोधनासाठी माहितीचे संकलन व पृथ्थ्करण करणारी “शिखर संस्था ” म्हणून सारथी संस्था कार्यरत आहे. लक्षित गटाच्या समाजातील विविध समस्यावर जण-जागृती करून विशेष व पथदर्शी प्रकल्प वेळोवेळी हाती घेण्यात येत आहे. सद्यस्थितीत लक्षित गटातील इच्छुक विद्यार्थ्यांना सारथी संस्थेमार्फत “पोलीस भरती” करीता निशुल्क ऑनलाईन प्रशिक्षण देण्यात आले आहे. त्याचप्रमाणे छत्रपती शाहू महाराज संशोधन शिष्यवृत्ती अंतर्गत एम. फ़िल.व छत्रपती शाहू महाराज राष्ट्रीय संशोधन शिष्यवृत्ती अंतर्गत पी.एच.डी. करणा-या विद्यार्थ्यांना शिष्यवृत्ती देण्यात येत आहे. छत्रपती शिवाजी महाराज स्मृती ग्रंथाच्या 50000 प्रतिची छपाई बालभारती या संस्थेच्या माध्यमातून करण्यात येत आहे.तसेच लक्षित गटातील इच्छुक विद्यार्थ्यांना महाराष्ट्र राज्य लोकसेवा आयोग व केंद्रीय लोकसेवा आयोग परीक्षा उत्तीर्ण होण्याच्या दृष्टीने परिक्षेच्या तयारीसाठी विद्यावेतन देण्यात येत आहे. केंद्रीय लोकसेवा आयोगाची “मुख्य परीक्षा 2020” करिता लक्षित गटातील 59 विद्यार्थ्यांची झूम मीटिंग च्या माध्यमातून मुलाखत तयारी व अभिरूप मुलाखती घेण्यात आल्या आहेत. महाराष्ट्र लोकसेवा आयोगाच्या दुय्यम सेवा गट ब (अराजपत्रित) परीक्षेसाठी लक्षित गटातील विद्यार्थ्यांना निशुल्क ऑनलाईन प्रशिक्षण सारथी संस्थेमार्फत देण्यात येणार आहे. महाराष्ट्र अभियांत्रिकी सेवा स्पर्धा परीक्षा तयारीकरिता 250 विद्यार्थ्यांची निवड करण्याची प्रक्रिया सद्यस्थितीत चालू आहे.कर्मचारी निवड आयोग मार्फत अराजपत्रित पदांच्या स्पर्धा परीक्षेला बसलेल्या लक्षित गटातील विद्यार्थ्यांसाठी ऑनलाईन प्रशिक्षण घेण्याची कार्यवाही चालू आहे. कौशल्य विकास प्रशिक्षण कार्यक्रम संपूर्ण राज्यभर संस्थेच्या माध्यमातून राबविण्याची कार्यवाही सुरू आहे..`,
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
			en: 'Interactive E Application',
			mr: 'इंटरएक्टिव ई एप्लीकेशन',
		},
		membershipLogin: {
			en: 'Memebership Login',
			mr: 'सदस्यता लॉगिन',
		},
		tender: {
			en: 'Tender',
			mr: 'निविदा',
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
