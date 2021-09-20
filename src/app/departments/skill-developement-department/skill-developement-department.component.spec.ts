import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDevelopementDepartmentComponent } from './skill-developement-department.component';

describe('SkillDevelopementDepartmentComponent', () => {
  let component: SkillDevelopementDepartmentComponent;
  let fixture: ComponentFixture<SkillDevelopementDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillDevelopementDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDevelopementDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
