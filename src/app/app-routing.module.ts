import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './notice/notice.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{ path: 'notices', component: NoticeComponent },
	{
		path: 'pages',
		loadChildren: () =>
			import('./pages/pages.module').then((m) => m.PagesModule),
	},
	{
		path: 'department',
		loadChildren: () =>
			import('./departments/departments.module').then(
				(m) => m.DepartmentsModule
			),
	},
	{ path: '404', component: HomeComponent },
	{ path: '**', redirectTo: '/' },
];

const config: ExtraOptions = {
	useHash: false,
	relativeLinkResolution: 'legacy',
};

@NgModule({
	imports: [RouterModule.forRoot(routes, config)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
