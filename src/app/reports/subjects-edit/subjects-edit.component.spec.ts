import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsEditComponent } from './subjects-edit.component';

describe('SubjectsEditComponent', () => {
  let component: SubjectsEditComponent;
  let fixture: ComponentFixture<SubjectsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
