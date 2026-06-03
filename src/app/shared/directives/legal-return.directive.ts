import { Directive, HostListener, Input, inject } from '@angular/core';
import { LegalNavigationService } from '../services/legal-navigation.service';

/**
 * Merkt sich vor dem Öffnen einer Legal-Seite, wohin „Zurück“ scrollen soll.
 * Ohne Input → Startseite oben.
 */
@Directive({
  selector: 'a[routerLink][appLegalReturn]',
  standalone: true,
})
export class LegalReturnDirective {
  private readonly legalNav = inject(LegalNavigationService);

  /** Section-ID auf der Startseite, z. B. contact-section */
  @Input() appLegalReturn: string | null = null;

  @HostListener('click')
  onClick(): void {
    const sectionId = this.appLegalReturn?.trim() || null;
    this.legalNav.setReturnSection(sectionId);
  }
}
