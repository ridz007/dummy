import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttipsslideComponent } from './firsttipsslide.component';

describe('FirsttipsslideComponent', () => {
  let component: FirsttipsslideComponent;
  let fixture: ComponentFixture<FirsttipsslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsttipsslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttipsslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
