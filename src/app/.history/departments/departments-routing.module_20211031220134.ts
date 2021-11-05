import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

//Components
import { AccountsComponent } from './accounts/accounts.component';
import { ResearchDepartmentComponent } from './research-department/research-department.component';
import { CompetitiveExaminationDepartmentComponent } from './competitive-examination-department/competitive-examination-department.component';
import { ItDepartmentComponent } from './it-department/it-department.component';
import { CasteCertificateComponent } from '../caste-certificate/caste-certificate.component';
import { EducationDepartmentComponent } from './education-department/education-department.component';
import { LibraryDepartmentComponent } from './library-department/library-department.component';
import { SkillDevelopementDepartmentComponent } from './skill-developement-department/skill-developement-department.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdministrationAndManagementComponent } from './administration-and-management/administration-and-management.component';

const routes: Routes = [
	{ path: 'department/statistics', component: StatisticsComponent },
	{
		path: 'department/it',
		component: ItDepartmentComponent,
	},
	{
		path: 'department/library-department',
		component: LibraryDepartmentComponent,
	},
	{
		path: 'department/administration-and-management',
		component: AdministrationAndManagementComponent,
	},
	{
		path: 'department/research',
		component: ResearchDepartmentComponent,
	},
	{
		path: 'department/competitive-exam',
		component: CompetitiveExaminationDepartmentComponent,
	},
	{
		path: 'department/accounts',
		component: AccountsComponent,
	},
	{
		path: 'department/skill-developement-department',
		component: SkillDevelopementDepartmentComponent,
	},
	{
		path: 'department/caste-certificate',
		component: CasteCertificateComponent,
	},
	{
		path: 'department/education-department',
		component: EducationDepartmentComponent,
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule],
})
export class DepartmentsRoutingModule {}
