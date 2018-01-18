import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhslideComponent } from './seventhslide.component';

describe('SeventhslideComponent', () => {
  let component: SeventhslideComponent;
  let fixture: ComponentFixture<SeventhslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
