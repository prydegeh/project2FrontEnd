import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomer } from './registerCustomer.component';

describe('UserComponent', () => {
  let component: RegisterCustomer;
  let fixture: ComponentFixture<RegisterCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCustomer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
