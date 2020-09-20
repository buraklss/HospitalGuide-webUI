/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListofhoursindaysidComponent } from './listofhoursindaysid.component';

describe('ListofhoursindaysidComponent', () => {
  let component: ListofhoursindaysidComponent;
  let fixture: ComponentFixture<ListofhoursindaysidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofhoursindaysidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofhoursindaysidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
