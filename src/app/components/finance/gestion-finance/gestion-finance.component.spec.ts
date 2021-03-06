import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFinanceComponent } from './gestion-finance.component';

describe('GestionFinanceComponent', () => {
  let component: GestionFinanceComponent;
  let fixture: ComponentFixture<GestionFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
