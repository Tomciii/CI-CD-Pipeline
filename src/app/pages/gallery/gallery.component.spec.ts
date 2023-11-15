import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent]
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 3 images', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const images = compiled.querySelectorAll('.gallery img');
    expect(images.length).toBe(3);
  });
});
