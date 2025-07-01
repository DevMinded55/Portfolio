import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
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
