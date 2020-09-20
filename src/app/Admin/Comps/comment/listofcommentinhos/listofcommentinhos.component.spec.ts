/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListofcommentinhosComponent } from './listofcommentinhos.component';

describe('ListofcommentinhosComponent', () => {
  let component: ListofcommentinhosComponent;
  let fixture: ComponentFixture<ListofcommentinhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofcommentinhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofcommentinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
