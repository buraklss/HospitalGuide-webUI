/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UppcountryComponent } from './uppcountry.component';

describe('UppcountryComponent', () => {
  let component: UppcountryComponent;
  let fixture: ComponentFixture<UppcountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppcountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
