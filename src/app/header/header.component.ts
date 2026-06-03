import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ScrollToContactDirective } from '../shared/directives/scroll-to-contact.directive';
import { LegalReturnDirective } from '../shared/directives/legal-return.directive';
import { SectionScrollService } from '../shared/services/section-scroll.service';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink, ScrollToContactDirective, LegalReturnDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  overlayVisible = false;

  private readonly sectionScroll = inject(SectionScrollService);

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string): void {
    this.translate.use(language);
    this.overlayVisible = false;
  }

  toggleOverlay(): void {
    this.overlayVisible = !this.overlayVisible;
  }

  goHome(event: Event): void {
    event.preventDefault();
    this.scrollToSection('atf-section');
  }

  scrollToSection(fragment: string, event?: Event): void {
    this.overlayVisible = false;
    this.sectionScroll.scrollToSection(fragment, event);
  }
}
