import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSuivantComponent } from './tour-suivant.component';

describe('TourSuivantComponent', () => {
  let component: TourSuivantComponent;
  let fixture: ComponentFixture<TourSuivantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourSuivantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourSuivantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
