import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsOverviewPage } from './events-overview.page';

describe('EventsOverviewPage', () => {
  let component: EventsOverviewPage;
  let fixture: ComponentFixture<EventsOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsOverviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
