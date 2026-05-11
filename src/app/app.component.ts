import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

const LANG_STORAGE_KEY = 'portfolio.lang';
const SUPPORTED_LANGS = ['de', 'en'] as const;
type SupportedLang = (typeof SUPPORTED_LANGS)[number];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    this.translate.addLangs([...SUPPORTED_LANGS]);
    this.translate.setDefaultLang('en');

    const initialLang = this.resolveInitialLang();
    this.translate.use(initialLang);

    this.translate.onLangChange.subscribe(({ lang }) => {
      if (this.isSupported(lang)) {
        try {
          localStorage.setItem(LANG_STORAGE_KEY, lang);
        } catch {
          // localStorage may be unavailable (private mode, SSR) — ignore
        }
      }
    });
  }

  private resolveInitialLang(): SupportedLang {
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (stored && this.isSupported(stored)) {
        return stored;
      }
    } catch {
      // ignore storage access errors
    }

    const browser = (navigator?.language ?? 'en').toLowerCase();
    return browser.startsWith('de') ? 'de' : 'en';
  }

  private isSupported(lang: string): lang is SupportedLang {
    return (SUPPORTED_LANGS as readonly string[]).includes(lang);
  }
}
