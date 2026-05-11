import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ScrollToContactDirective } from '../shared/directives/scroll-to-contact.directive';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink, ScrollToContactDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  overlayVisible = false;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  changeLanguage(language: string): void {
    this.translate.use(language);
    this.overlayVisible = false;
  }

  toggleOverlay(): void {
    this.overlayVisible = !this.overlayVisible;
  }

  goHome(event: Event): void {
    event.preventDefault();
    const path = this.router.url.split('?')[0].split('#')[0];
    const isHome = path === '' || path === '/';

    if (isHome) {
      document.getElementById('atf-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    void this.router.navigate(['/'], { fragment: 'atf-section' }).then(() => {
      setTimeout(() => this.viewportScroller.scrollToAnchor('atf-section'), 0);
    });
  }
}
