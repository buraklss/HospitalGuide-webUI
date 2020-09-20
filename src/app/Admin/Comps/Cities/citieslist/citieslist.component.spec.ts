/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitieslistComponent } from './citieslist.component';

describe('CitieslistComponent', () => {
  let component: CitieslistComponent;
  let fixture: ComponentFixture<CitieslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitieslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
