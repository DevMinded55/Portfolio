import { Directive, HostListener, inject } from '@angular/core';
import { SectionScrollService } from '../services/section-scroll.service';

/**
 * Scrolls to #atf-section on the home page. Works from other routes via router + fragment.
 */
@Directive({
  selector: '[appScrollToTop]',
  standalone: true,
})
export class ScrollToTopDirective {
  private readonly sectionScroll = inject(SectionScrollService);

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    this.sectionScroll.scrollToSection('atf-section', event);
  }
}
