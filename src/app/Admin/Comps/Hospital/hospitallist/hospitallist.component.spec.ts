/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HospitallistComponent } from './hospitallist.component';

describe('HospitallistComponent', () => {
  let component: HospitallistComponent;
  let fixture: ComponentFixture<HospitallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
