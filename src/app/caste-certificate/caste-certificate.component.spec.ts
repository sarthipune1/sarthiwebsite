import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasteCertificateComponent } from './caste-certificate.component';

describe('CasteCertificateComponent', () => {
  let component: CasteCertificateComponent;
  let fixture: ComponentFixture<CasteCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasteCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasteCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
