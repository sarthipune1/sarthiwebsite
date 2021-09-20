import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationAndManagementComponent } from './administration-and-management.component';

describe('AdministrationAndManagementComponent', () => {
	let component: AdministrationAndManagementComponent;
	let fixture: ComponentFixture<AdministrationAndManagementComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdministrationAndManagementComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AdministrationAndManagementComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
