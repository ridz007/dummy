import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSlideComponent } from './thirdSlide.component';

describe('ThirdSlideComponent', () => {
  let component: ThirdSlideComponent;
  let fixture: ComponentFixture<ThirdSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
