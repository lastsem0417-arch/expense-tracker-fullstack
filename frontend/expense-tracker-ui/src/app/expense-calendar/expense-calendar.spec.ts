import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCalendar } from './expense-calendar';

describe('ExpenseCalendar', () => {
  let component: ExpenseCalendar;
  let fixture: ComponentFixture<ExpenseCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseCalendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
