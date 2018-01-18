import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthslideComponent } from './fifthslide.component';

describe('FifthslideComponent', () => {
  let component: FifthslideComponent;
  let fixture: ComponentFixture<FifthslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
