import { TestBed } from '@angular/core/testing';

import { NgxPdfService } from './ngx-pdf.service';

describe('NgxPdfService', () => {
  let service: NgxPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
