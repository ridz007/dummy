import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappydaysslideComponent } from './happydaysslide.component';

describe('HappydaysslideComponent', () => {
  let component: HappydaysslideComponent;
  let fixture: ComponentFixture<HappydaysslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappydaysslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappydaysslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
