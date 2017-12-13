import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeformComponent } from './realtimeform.component';

describe('RealtimeformComponent', () => {
  let component: RealtimeformComponent;
  let fixture: ComponentFixture<RealtimeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
