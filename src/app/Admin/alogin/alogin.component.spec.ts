/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AloginComponent } from './alogin.component';

describe('AloginComponent', () => {
  let component: AloginComponent;
  let fixture: ComponentFixture<AloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});