import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from '../about-us/about-us.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [AboutUsComponent],
	imports: [PagesRoutingModule, FlexLayoutModule, CommonModule],
})
export class PagesModule {}
