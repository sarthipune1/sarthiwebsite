import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainObjectivesComponent } from './main-objectives.component';

describe('MainObjectivesComponent', () => {
  let component: MainObjectivesComponent;
  let fixture: ComponentFixture<MainObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainObjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
