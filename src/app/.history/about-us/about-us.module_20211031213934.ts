import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { AboutUsComponent } from './about-us.component';

@NgModule({
	declarations: [AboutUsComponent],
	imports: [CommonModule, FlexLayoutModule, FlexModule],
})
export class AboutUsModule {}
