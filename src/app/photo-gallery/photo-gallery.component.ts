import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  slideIndex: any = 0;

  carousel() {
    var i: number;
    var x: any = document.getElementsByClassName('mySlides');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    this.slideIndex++;
    if (this.slideIndex > x.length) {
      this.slideIndex = 1;
    }
    x[this.slideIndex - 1].style.display = 'block';
    setTimeout(() => this.carousel(), 2000);
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

  constructor() {}

  ngOnInit(): void {
    // this.showDivs(this.slideIndex);
    this.carousel();
  }
}
