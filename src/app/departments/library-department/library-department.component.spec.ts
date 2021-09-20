import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDepartmentComponent } from './library-department.component';

describe('LibraryDepartmentComponent', () => {
  let component: LibraryDepartmentComponent;
  let fixture: ComponentFixture<LibraryDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
