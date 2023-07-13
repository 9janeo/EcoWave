import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistBoxComponent } from './artist-box.component';

describe('ArtistBoxComponent', () => {
  let component: ArtistBoxComponent;
  let fixture: ComponentFixture<ArtistBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistBoxComponent]
    });
    fixture = TestBed.createComponent(ArtistBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
