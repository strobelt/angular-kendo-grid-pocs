import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoGridComponent } from './kendo-grid.component';

describe('KendoGridComponent', () => {
  let component: KendoGridComponent;
  let fixture: ComponentFixture<KendoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
