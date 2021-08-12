import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricsEditComponent } from './rubrics-edit.component';

describe('RubricsEditComponent', () => {
  let component: RubricsEditComponent;
  let fixture: ComponentFixture<RubricsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubricsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
