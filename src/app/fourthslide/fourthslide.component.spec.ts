import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthslideComponent } from './fourthslide.component';

describe('FourthslideComponent', () => {
  let component: FourthslideComponent;
  let fixture: ComponentFixture<FourthslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
