import {
	CUSTOM_ELEMENTS_SCHEMA,
	NgModule,
	NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './notice/notice.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FormioModule } from '@formio/angular';

//CKEditor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		NoticeComponent,
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
	],
	providers: [],
	exports: [HeaderComponent],
	bootstrap: [AppComponent],
	// schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
