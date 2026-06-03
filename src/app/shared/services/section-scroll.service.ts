import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SectionScrollService {
  private static readonly MAX_ATTEMPTS = 40;

  constructor(private readonly router: Router) {}

  getScrollOffset(): number {
    const root = getComputedStyle(document.documentElement);
    const header = parseFloat(root.getPropertyValue('--header-height')) || 92;
    const extra = parseFloat(root.getPropertyValue('--scroll-anchor-offset')) || 16;
    return header + extra;
  }

  scrollToElement(id: string, smooth = true): boolean {
    const el = document.getElementById(id);
    if (!el) {
      return false;
    }

    const top =
      el.getBoundingClientRect().top + window.scrollY - this.getScrollOffset();
    window.scrollTo({
      top: Math.max(0, top),
      behavior: smooth ? 'smooth' : 'auto',
    });
    return true;
  }

  /**
   * Scroll to a home section. From other routes, navigates to `/` first and
   * waits until the target exists in the DOM (fixes header overlap on first click).
   */
  scrollToSection(id: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    const path = this.router.url.split('?')[0].split('#')[0];
    const isHome = path === '' || path === '/';

    if (isHome) {
      if (this.scrollToElement(id)) {
        this.syncFragment(id);
      } else {
        this.waitForElementAndScroll(id);
      }
      return;
    }

    void this.router.navigate(['/']).then(() => {
      this.waitForElementAndScroll(id);
    });
  }

  private waitForElementAndScroll(id: string, attempt = 0): void {
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.scrollToElement(id, true);
          this.syncFragment(id);
        });
      });
      return;
    }

    if (attempt < SectionScrollService.MAX_ATTEMPTS) {
      requestAnimationFrame(() => this.waitForElementAndScroll(id, attempt + 1));
    }
  }

  private syncFragment(id: string): void {
    const hash = `#${id}`;
    if (window.location.hash !== hash) {
      history.replaceState(history.state, '', hash);
    }
  }
}
