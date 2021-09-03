import { TestBed } from '@angular/core/testing';

import { OrderdaoService } from './orderdao.service';

describe('OrderdaoService', () => {
  let service: OrderdaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderdaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
