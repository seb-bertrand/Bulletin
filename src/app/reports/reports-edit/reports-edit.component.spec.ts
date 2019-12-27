import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEditComponent } from './reports-edit.component';

describe('ReportsEditComponent', () => {
  let component: ReportsEditComponent;
  let fixture: ComponentFixture<ReportsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
