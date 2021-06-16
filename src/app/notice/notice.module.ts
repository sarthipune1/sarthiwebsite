import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import {NoticeComponent} from "./notice.component";



@NgModule({
  declarations: [NoticeComponent],
  exports:[NoticeComponent],
  imports: [
    CommonModule,
    FlexModule,
    FlexLayoutModule
  ]
})
export class NoticeModule { }
