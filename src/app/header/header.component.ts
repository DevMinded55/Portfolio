import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink],
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
