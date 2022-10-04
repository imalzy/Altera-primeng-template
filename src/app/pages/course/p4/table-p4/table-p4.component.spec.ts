import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableP4Component } from './table-p4.component';

describe('TableP4Component', () => {
  let component: TableP4Component;
  let fixture: ComponentFixture<TableP4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableP4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
