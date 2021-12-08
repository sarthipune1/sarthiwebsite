import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
import { VisionComponent } from 'app/vision/vision.component';
import { MissionComponent } from 'app/mission/mission.component';

const routes: Routes = [
	{
		path: 'about-us',
		component: AboutUsComponent,
	},
	{ path: 'contact-us', component: ContactUsComponent },
	{ path: 'gallery', component: PhotoGalleryComponent },
	{
		path: 'board-of-directors',
		component: BoardOfDirectorsComponent,
	},
	{ path: 'main-objectives', component: MainObjectivesComponent },
	{
		path: 'awards',
		component: AwardsComponent,
	},
	{
		path: 'tender',
		component: TenderComponent,
	},
	{
		path: 'rti',
		component: RtiComponent,
	},
	{
		path: 'ebooks',
		component: EbookComponent,
	},
	{
		path: 'success',
		component: SuccessComponent,
	},
	{
		path: 'gr',
		component: GrComponent,
	},
	{
		path: 'vision',
		component: VisionComponent,
	},
	{
		path: 'mission',
		component: MissionComponent,
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesRoutingModule {}
