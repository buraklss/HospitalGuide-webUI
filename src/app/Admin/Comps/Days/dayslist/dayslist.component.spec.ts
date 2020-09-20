/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DayslistComponent } from './dayslist.component';

describe('DayslistComponent', () => {
  let component: DayslistComponent;
  let fixture: ComponentFixture<DayslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
