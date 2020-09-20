/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListofdoctorsinclinicsComponent } from './listofdoctorsinclinics.component';

describe('ListofdoctorsinclinicsComponent', () => {
  let component: ListofdoctorsinclinicsComponent;
  let fixture: ComponentFixture<ListofdoctorsinclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofdoctorsinclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofdoctorsinclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
