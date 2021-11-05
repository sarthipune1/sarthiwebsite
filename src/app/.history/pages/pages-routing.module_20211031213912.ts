import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';

const routes: Routes = [
	{
		path: 'about-us',
		component: AboutUsComponent,
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class PagesRoutingModule {}
