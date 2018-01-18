import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtipsslideComponent } from './secondtipsslide.component';

describe('SecondtipsslideComponent', () => {
  let component: SecondtipsslideComponent;
  let fixture: ComponentFixture<SecondtipsslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondtipsslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondtipsslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
