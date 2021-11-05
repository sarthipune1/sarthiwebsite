import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { ResearchDepartmentComponent } from './research-department/research-department.component';
import { CompetitiveExaminationDepartmentComponent } from './competitive-examination-department/competitive-examination-department.component';
import { ItDepartmentComponent } from './it-department/it-department.component';
import { WomenEmpowermentDepartmentComponent } from './women-empowerment-department/women-empowerment-department.component';
import { CasteCertificateComponent } from '../caste-certificate/caste-certificate.component';
import { EducationDepartmentComponent } from './education-department/education-department.component';
import { LibraryDepartmentComponent } from './library-department/library-department.component';
import { SkillDevelopementDepartmentComponent } from './skill-developement-department/skill-developement-department.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdministrationAndManagementComponent } from './administration-and-management/administration-and-management.component';

@NgModule({
	declarations: [
		AccountsComponent,
		ResearchDepartmentComponent,
		CompetitiveExaminationDepartmentComponent,
		ItDepartmentComponent,
		WomenEmpowermentDepartmentComponent,
		CasteCertificateComponent,
		EducationDepartmentComponent,
		LibraryDepartmentComponent,
		SkillDevelopementDepartmentComponent,
		StatisticsComponent,
		AdministrationAndManagementComponent,
	],
	imports: [CommonModule, DepartmentsRoutingModule],
})
export class DepartmentsModule {}
