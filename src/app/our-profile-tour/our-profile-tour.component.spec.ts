import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProfileTourComponent } from './our-profile-tour.component';

describe('OurProfileTourComponent', () => {
  let component: OurProfileTourComponent;
  let fixture: ComponentFixture<OurProfileTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProfileTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProfileTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
