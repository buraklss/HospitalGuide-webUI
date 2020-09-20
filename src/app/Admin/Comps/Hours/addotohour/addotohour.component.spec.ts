/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddotohourComponent } from './addotohour.component';

describe('AddotohourComponent', () => {
  let component: AddotohourComponent;
  let fixture: ComponentFixture<AddotohourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddotohourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddotohourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
