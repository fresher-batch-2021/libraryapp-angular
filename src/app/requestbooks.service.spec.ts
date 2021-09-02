import { TestBed } from '@angular/core/testing';

import { RequestbooksService } from './requestbooks.service';

describe('RequestbooksService', () => {
  let service: RequestbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
