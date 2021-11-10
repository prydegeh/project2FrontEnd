import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingStatementComponent } from './billing-statement.component';

describe('BillingStatementComponent', () => {
  let component: BillingStatementComponent;
  let fixture: ComponentFixture<BillingStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
