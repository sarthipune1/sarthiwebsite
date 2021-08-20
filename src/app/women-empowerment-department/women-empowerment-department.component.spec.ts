import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenEmpowermentDepartmentComponent } from './women-empowerment-department.component';

describe('WomenEmpowermentDepartmentComponent', () => {
  let component: WomenEmpowermentDepartmentComponent;
  let fixture: ComponentFixture<WomenEmpowermentDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenEmpowermentDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenEmpowermentDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
