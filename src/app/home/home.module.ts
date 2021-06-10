import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";

import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent,
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexModule,
    RouterModule,
    CarouselModule
  ]
})
export class HomeModule { }
