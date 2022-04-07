import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPdfComponent } from './ngx-pdf.component';

describe('NgxPdfComponent', () => {
  let component: NgxPdfComponent;
  let fixture: ComponentFixture<NgxPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
