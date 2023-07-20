import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackBoxComponent } from './track-box.component';

describe('TrackBoxComponent', () => {
  let component: TrackBoxComponent;
  let fixture: ComponentFixture<TrackBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackBoxComponent]
    });
    fixture = TestBed.createComponent(TrackBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
