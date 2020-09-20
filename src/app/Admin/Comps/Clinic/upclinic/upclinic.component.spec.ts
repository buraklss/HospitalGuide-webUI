/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpclinicComponent } from './upclinic.component';

describe('UpclinicComponent', () => {
  let component: UpclinicComponent;
  let fixture: ComponentFixture<UpclinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpclinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
