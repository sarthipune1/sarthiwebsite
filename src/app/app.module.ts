import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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
import { DepartmentsComponent } from './departments/departments.component';
import { NoticeComponent } from './notice/notice.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { EventsComponent } from './events/events.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FormioModule } from '@formio/angular';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SubheaderComponent,
    EventsComponent,
    AboutUsComponent,
    DepartmentsComponent,
    NoticeComponent,
    PhotoGalleryComponent,
    ContactUsComponent,
    StatisticsComponent,
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
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'notices', component: NoticeComponent },
      { path: 'photo-gallery', component: PhotoGalleryComponent },
      { path: 'reports', component: StatisticsComponent },
      { path: 'events', component: EventsComponent },
    ]),
  ],
  providers: [],
  exports: [HeaderComponent],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
