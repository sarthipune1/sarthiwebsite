import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiveExaminationDepartmentComponent } from './competitive-examination-department.component';

describe('CompetitiveExaminationDepartmentComponent', () => {
  let component: CompetitiveExaminationDepartmentComponent;
  let fixture: ComponentFixture<CompetitiveExaminationDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitiveExaminationDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitiveExaminationDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
