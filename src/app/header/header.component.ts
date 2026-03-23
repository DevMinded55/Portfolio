import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ScrollToContactDirective } from '../shared/directives/scroll-to-contact.directive';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink, ScrollToContactDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private translate: TranslateService){
    
  }

  changeLanguage(language: string){
    this.translate.use(language);
  }

  overlayVisible:boolean = false;

  toggleOverlay(): void {
    this.overlayVisible = !this.overlayVisible;
  }
}
