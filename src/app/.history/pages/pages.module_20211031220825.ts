import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatGridListModule } from '@angular/material/grid-list';

//Components
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { BoardOfDirectorsComponent } from '../board-of-directors/board-of-directors.component';
import { MainObjectivesComponent } from '../main-objectives/main-objectives.component';
import { AwardsComponent } from '../awards/awards.component';
import { TenderComponent } from '../tender/tender.component';
import { RtiComponent } from '../rti/rti.component';
import { EbookComponent } from '../ebook/ebook.component';
import { SuccessComponent } from '../success/success.component';
import { GrComponent } from '../gr/gr.component';

@NgModule({
	declarations: [
		AboutUsComponent,
		ContactUsComponent,
		PhotoGalleryComponent,
		BoardOfDirectorsComponent,
		MainObjectivesComponent,
		AwardsComponent,
		TenderComponent,
		RtiComponent,
		EbookComponent,
		SuccessComponent,
		GrComponent,
	],
	imports: [
		PagesRoutingModule,
		FlexLayoutModule,
		CommonModule,
		FontAwesomeModule,
		NgxChartsModule,
		MatGridListModule,
	],
})
export class PagesModule {}
