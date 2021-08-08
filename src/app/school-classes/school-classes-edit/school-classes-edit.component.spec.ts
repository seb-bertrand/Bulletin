import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassesEditComponent } from './school-classes-edit.component';

describe('SchoolClassesEditComponent', () => {
  let component: SchoolClassesEditComponent;
  let fixture: ComponentFixture<SchoolClassesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolClassesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
