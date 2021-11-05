import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './notice/notice.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{ path: 'notices', component: NoticeComponent },
	{
		path: '',
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

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
