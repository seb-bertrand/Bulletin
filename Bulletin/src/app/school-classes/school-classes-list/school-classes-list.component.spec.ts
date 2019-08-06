import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassesListComponent } from './school-classes-list.component';

describe('SchoolClassesListComponent', () => {
  let component: SchoolClassesListComponent;
  let fixture: ComponentFixture<SchoolClassesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolClassesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
