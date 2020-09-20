/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UphourComponent } from './uphour.component';

describe('UphourComponent', () => {
  let component: UphourComponent;
  let fixture: ComponentFixture<UphourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UphourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UphourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
