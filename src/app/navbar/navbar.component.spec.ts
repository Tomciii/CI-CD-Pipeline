import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarComponent],
    });

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to home', () => {
    const homeLink = fixture.debugElement.query(By.css('a[href="/"]'));
    expect(homeLink).toBeTruthy();
  });

  it('should have a link to gallery', () => {
    const galleryLink = fixture.debugElement.query(By.css('a[href="/#/gallery"]'));
    expect(galleryLink).toBeTruthy();
  });

  it('should have a link to about', () => {
    const aboutLink = fixture.debugElement.query(By.css('a[href="/#/about"]'));
    expect(aboutLink).toBeTruthy();
  });

  it('should navigate to home when home link is clicked', () => {
    const homeLink = fixture.debugElement.query(By.css('a[href="/"]'));
    const navigateSpy = spyOn(router, 'navigate');
    homeLink.triggerEventHandler('click', null);
    expect(navigateSpy).toHaveBeenCalledWith(['/'] as any);
  });

  it('should navigate to gallery when gallery link is clicked', () => {
    const galleryLink = fixture.debugElement.query(By.css('a[href="/#/gallery"]'));
    const navigateSpy = spyOn(router, 'navigate');
    galleryLink.triggerEventHandler('click', null);
    expect(navigateSpy).toHaveBeenCalledWith(['/gallery'] as any);
  });

  it('should navigate to about when about link is clicked', () => {
    const aboutLink = fixture.debugElement.query(By.css('a[href="/#/about"]'));
    const navigateSpy = spyOn(router, 'navigate');
    aboutLink.triggerEventHandler('click', null);
    expect(navigateSpy).toHaveBeenCalledWith(['/about'] as any);
  });

  // Add more tests as needed for link text content, external links, etc.
});
