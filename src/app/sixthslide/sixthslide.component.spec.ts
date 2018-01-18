import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthslideComponent } from './sixthslide.component';

describe('SixthslideComponent', () => {
  let component: SixthslideComponent;
  let fixture: ComponentFixture<SixthslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
