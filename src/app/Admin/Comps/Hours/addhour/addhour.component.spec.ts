/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddhourComponent } from './addhour.component';

describe('AddhourComponent', () => {
  let component: AddhourComponent;
  let fixture: ComponentFixture<AddhourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
