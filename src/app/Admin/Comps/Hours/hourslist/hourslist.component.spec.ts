/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HourslistComponent } from './hourslist.component';

describe('HourslistComponent', () => {
  let component: HourslistComponent;
  let fixture: ComponentFixture<HourslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
