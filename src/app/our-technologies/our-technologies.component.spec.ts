import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTechnologiesComponent } from './our-technologies.component';

describe('OurTechnologiesComponent', () => {
  let component: OurTechnologiesComponent;
  let fixture: ComponentFixture<OurTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
