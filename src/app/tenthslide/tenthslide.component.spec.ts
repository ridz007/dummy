import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthslideComponent } from './tenthslide.component';

describe('TenthslideComponent', () => {
  let component: TenthslideComponent;
  let fixture: ComponentFixture<TenthslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenthslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenthslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
