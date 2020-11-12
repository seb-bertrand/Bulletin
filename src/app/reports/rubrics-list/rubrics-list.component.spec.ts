import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricsListComponent } from './rubrics-list.component';

describe('RubricsListComponent', () => {
  let component: RubricsListComponent;
  let fixture: ComponentFixture<RubricsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
