import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsHeaderComponent } from './artists-header.component';

describe('ArtistsHeaderComponent', () => {
  let component: ArtistsHeaderComponent;
  let fixture: ComponentFixture<ArtistsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistsHeaderComponent]
    });
    fixture = TestBed.createComponent(ArtistsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
