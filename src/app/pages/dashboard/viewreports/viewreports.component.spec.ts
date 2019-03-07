import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreportsComponent } from './viewreports.component';

describe('ViewreportsComponent', () => {
  let component: ViewreportsComponent;
  let fixture: ComponentFixture<ViewreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
