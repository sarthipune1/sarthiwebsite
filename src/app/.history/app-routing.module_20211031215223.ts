import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: '',
		loadChildren: () =>
			import('./pages/pages.module').then((m) => m.PagesModule),
	},
	{ path: '404', component: HomeComponent },
	{ path: '**', redirectTo: '/' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
