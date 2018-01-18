import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthslideComponent } from './ninthslide.component';

describe('NinthslideComponent', () => {
  let component: NinthslideComponent;
  let fixture: ComponentFixture<NinthslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
