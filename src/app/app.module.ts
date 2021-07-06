import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { DepartmentsModule } from './departments/departments.module';
import { NoticeModule } from './notice/notice.module';
import { PhotoGalleryModule } from './photo-gallery/photo-gallery.module';
import { StatisticsModule } from './statistics/statistics.module';

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
import { AccountsModule } from './accounts/accounts.module';
import { EventsComponent } from './events/events.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
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
    // HomeModule,
    // AboutUsModule,
    // ContactUsModule,
    // DepartmentsModule,
    // AccountsModule,
    // NoticeModule,
    // PhotoGalleryModule,
    // StatisticsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
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
})
export class AppModule {}
