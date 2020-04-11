import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFamilleComponent } from './liste-famille.component';

describe('ListeFamilleComponent', () => {
  let component: ListeFamilleComponent;
  let fixture: ComponentFixture<ListeFamilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFamilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
