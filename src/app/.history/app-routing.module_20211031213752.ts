import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{ path: 'about-us', component: AboutUsComponent },
	{
		path: 'pages',
		loadChildren: () =>
			import('./pages/pages.module').then((a) => a.PagesModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
