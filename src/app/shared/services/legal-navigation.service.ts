import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SectionScrollService } from './section-scroll.service';

@Injectable({ providedIn: 'root' })
export class LegalNavigationService {
  private returnSectionId: string | null = null;

  constructor(
    private readonly router: Router,
    private readonly sectionScroll: SectionScrollService
  ) {}

  /** Vor Navigation zu Impressum/Datenschutz setzen (z. B. contact-section). */
  setReturnSection(sectionId: string | null): void {
    this.returnSectionId = sectionId;
  }

  navigateBackHome(): void {
    const scrollTo = this.returnSectionId?.trim() || null;
    this.returnSectionId = null;

    if (scrollTo) {
      void this.router.navigate(['/']).then(() => {
        this.sectionScroll.scrollToSection(scrollTo);
      });
      return;
    }

    void this.router.navigate(['/']);
  }
}
