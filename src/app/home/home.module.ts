import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexModule,
    FlexLayoutModule,
    RouterModule,
    CarouselModule,
    ScrollingModule,
    HeaderModule,
  ],
})
export class HomeModule {}
