import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

/**
 * Scrolls to #contact-section on the home page. Works from other routes via router + fragment.
 */
@Directive({
  selector: '[appScrollToContact]',
  standalone: true,
})
export class ScrollToContactDirective {
  constructor(
    private readonly router: Router,
    private readonly viewportScroller: ViewportScroller
  ) {}

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    const path = this.router.url.split('?')[0].split('#')[0];
    const isHome = path === '' || path === '/';

    if (isHome) {
      document
        .getElementById('contact-section')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    void this.router.navigate(['/'], { fragment: 'contact-section' }).then(() => {
      // Ensure anchor exists after home is rendered
      setTimeout(() => this.viewportScroller.scrollToAnchor('contact-section'), 0);
    });
  }
}
