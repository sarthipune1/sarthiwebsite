import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from '../about-us/about-us.component';

@NgModule({
	declarations: [AboutUsComponent],
	imports: [CommonModule, PagesRoutingModule],
	exports: [CommonModule],
})
export class PagesModule {}
