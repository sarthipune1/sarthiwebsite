import {
	CUSTOM_ELEMENTS_SCHEMA,
	NgModule,
	NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FormioModule } from '@formio/angular';

import { LightgalleryModule } from 'lightgallery/angular';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './notice/notice.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { PhotoGalleryComponent } from 'app/photo-gallery/photo-gallery.component';

//CKEditor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxMarqueeModule } from 'ngx-marquee';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		NoticeComponent,
		SubheaderComponent,
		PhotoGalleryComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule,
		MatGridListModule,
		MatCardModule,
		FormioModule,
		FlexLayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSlideToggleModule,
		BrowserAnimationsModule,
		CarouselModule,
		FontAwesomeModule,
		NgxChartsModule,
		CKEditorModule,
		MatProgressBarModule,
		HttpClientModule,
		LightgalleryModule,
		NgxMarqueeModule,
	],
	providers: [],
	exports: [HeaderComponent],
	bootstrap: [AppComponent],
	// schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
