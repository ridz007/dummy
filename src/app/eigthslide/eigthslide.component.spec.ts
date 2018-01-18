import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigthslideComponent } from './eigthslide.component';

describe('EigthslideComponent', () => {
  let component: EigthslideComponent;
  let fixture: ComponentFixture<EigthslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigthslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigthslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
