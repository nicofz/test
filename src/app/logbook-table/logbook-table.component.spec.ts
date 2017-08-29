import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbookTableComponent } from './logbook-table.component';

describe('LogbookTableComponent', () => {
  let component: LogbookTableComponent;
  let fixture: ComponentFixture<LogbookTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogbookTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbookTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
