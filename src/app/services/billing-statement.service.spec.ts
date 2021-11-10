import { TestBed } from '@angular/core/testing';

import { BillingStatementService } from '../services/billing-statement.service';

describe('BillingStatementService', () => {
  let service: BillingStatementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingStatementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
