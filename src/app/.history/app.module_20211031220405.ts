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
import { SubheaderComponent } from './subheader/subheader.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NoticeComponent } from './notice/notice.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { StatisticsComponent } from './departments/statistics/statistics.component';
import { RouterModule } from '@angular/router';
import { AccountsComponent } from './departments/accounts/accounts.component';
import { EventsComponent } from './events/events.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FormioModule } from '@formio/angular';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { MainObjectivesComponent } from './main-objectives/main-objectives.component';
import { ResearchDepartmentComponent } from './departments/research-department/research-department.component';
import { CompetitiveExaminationDepartmentComponent } from './departments/competitive-examination-department/competitive-examination-department.component';
import { ItDepartmentComponent } from './departments/it-department/it-department.component';
import { WomenEmpowermentDepartmentComponent } from './departments/women-empowerment-department/women-empowerment-department.component';
import { CasteCertificateComponent } from './caste-certificate/caste-certificate.component';
import { AwardsComponent } from './awards/awards.component';
import { RtiComponent } from './rti/rti.component';
import { AdministrationAndManagementComponent } from './departments/administration-and-management/administration-and-management.component';

//CKEditor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EducationDepartmentComponent } from './departments/education-department/education-department.component';
import { LibraryDepartmentComponent } from './departments/library-department/library-department.component';
import { SkillDevelopementDepartmentComponent } from './departments/skill-developement-department/skill-developement-department.component';
import { EbookComponent } from './ebook/ebook.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SuccessComponent } from './success/success.component';
import { GrComponent } from './gr/gr.component';
import { TenderComponent } from './tender/tender.component';

@NgModule({
	declarations: [
		AppComponent,
		AccountsComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
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
