import { Component, OnInit } from '@angular/core';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
	constructor(private routeService: RouteService) {}
	pageStats: Subheader;

	ngOnInit(): void {
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
	}

	scroll(el: HTMLElement) {
		el.scrollIntoView();
	}

	getItem(key: object) {
		const l = localStorage.getItem('lang');
		return key[l];
	}

	photoItems = [
		{
			image: 'photo.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo1.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo2.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo3.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo2.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo1.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo3.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo1.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo3.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
		{
			image: 'photo1.png',
			name: 'Dr. Amy Bragg Carey',
			position: 'President,President’s Office',
		},
	];

	translations = {
		about: {
			en: 'About',
			mr: 'सारथी',
		},
		sarthi: {
			en: 'SARTHI',
			mr: 'विषयी',
		},
		description: {
			en: `Chhatrapati Shahu Maharaj Research Training and Human Development Institute (SARTHI), Pune is registered
                under Company Act, 2013 under Section 8 as Non-Profit government company for research, policy advocacy,
                training etc. for socio-economic and education
                development of Maratha, Maratha-Kunbi, Kunbi-Maratha, Kunbi community in Maharashtra State. Our
                organisation thrust areas includes research, policy advocacy to government, training etc. and guidance
                to rural population, particularly the
                farmers whose livelihood is dependent on agriculture.`,
			mr: `छत्रपती शाहू महाराज संशोधन, प्रशिक्षण व मानव विकास संस्था (सारथी), पुणे ही संस्था कंपनी कायदा, 2013 अंतर्गत कलम 8 अन्वये नॉन-प्रॉफिट सरकारी कंपनी म्हणून स्थापन आहे. सारथीची स्थापना मराठा, मराठा-कुणबी, कुणबी-मराठा, कुणबी समुदाय आणि महाराष्ट्रातील कृषीवर अवलंबून असलेल्या कुटुंबांचे सामाजिक-आर्थिक आणि शैक्षणिक विकास करण्यासाठी आणि आमच्या संस्थेमध्ये जोरदार क्षेत्रांचा समावेश आहे, संशोधन, सरकारची धोरणे, प्रशिक्षण इ. आणि ग्रामीण जनतेस मार्गदर्शन करणे.`,
		},
		first_appointed: {
			en: 'First Appointed Director and Member of the Organization and Articles of Association & Memorandum of Association',
			mr: 'प्रथम संचालक व संस्थेच्या सदस्य यांची नियुक्ती तसेच संघटनेचा लेख (Articles of Association) व संघटनेचा मसुदा (Memorandum of Association)',
		},
		gr_bod: {
			en: 'GR of Board of Directors',
			mr: 'संचालक मंडळ जी.आर.',
		},
		view: {
			en: 'View',
			mr: 'पहा',
		},
	};
}
