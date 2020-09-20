/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListofcitiesincounrtyComponent } from './listofcitiesincounrty.component';

describe('ListofcitiesincounrtyComponent', () => {
  let component: ListofcitiesincounrtyComponent;
  let fixture: ComponentFixture<ListofcitiesincounrtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofcitiesincounrtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofcitiesincounrtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
