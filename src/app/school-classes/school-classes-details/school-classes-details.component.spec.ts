import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassesDetailsComponent } from './school-classes-details.component';

describe('SchoolClassesDetailsComponent', () => {
  let component: SchoolClassesDetailsComponent;
  let fixture: ComponentFixture<SchoolClassesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolClassesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
