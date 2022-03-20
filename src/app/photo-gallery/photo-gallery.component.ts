import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IGallery } from 'app/home/home.component';
import { RouteService } from 'app/services/route.service';
import { Subheader } from 'app/subheader/subheader.component';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-photo-gallery',
	templateUrl: './photo-gallery.component.html',
	styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
	slideIndex: any = 0;
	@Input('isHome') isHome: boolean = false;
	photoGallery: IGallery[] = [];
	apiUrl = environment.apiUrl;

	carousel(n:number) {
		var i: number;
		var x: any = document.getElementsByClassName('mySlides');
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		this.slideIndex++;
		if (this.slideIndex > x.length) {
			this.slideIndex = 1;
		}
		if (x[this.slideIndex - 1] !== undefined) {
			x[this.slideIndex - 1].style.display = 'block';
		}
    if(n>1){
      setTimeout(() => {
        this.carousel(n);
      }, 10000);
    } else {
		setTimeout(() => this.carousel(n+1), 5000);
    }
	}

	plusDivs(n) {
		this.showDivs((this.slideIndex += n));
	}

	currentDiv(n) {
		this.showDivs((this.slideIndex = n));
	}

	showDivs(n) {
		var i;
		var x: any = document.getElementsByClassName('mySlides');
		var dots = document.getElementsByClassName('demo');
		if (n > x.length) {
			this.slideIndex = 1;
		}
		if (n < 1) {
			this.slideIndex = x.length;
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(' w3-red', '');
		}
		x[this.slideIndex - 1].style.display = 'block';
		dots[this.slideIndex - 1].className += ' w3-red';
	}

	constructor(private http: HttpClient, private routeService: RouteService) {}

	pageStats: Subheader;

	ngOnInit(): void {
		// add this line
		this.routeService.onGetData.subscribe((pageStats: Subheader) => {
			this.pageStats = pageStats;
		});
		this.getPhotoGallery();
	}

	getPhotoGallery() {
		this.http
			.get<IGallery[]>(`${environment.apiUrl}/gallery`)
			.subscribe((data) => {
				this.photoGallery = data;
				this.carousel(0);
			});
	}
}
