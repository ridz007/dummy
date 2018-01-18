import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSlideComponent } from './secondSlide.component';

describe('SecondSlideComponent', () => {
  let component: SecondSlideComponent;
  let fixture: ComponentFixture<SecondSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
