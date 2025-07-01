import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TeamplayerComponent } from "./teamplayer/teamplayer.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { RouterOutlet } from '@angular/router';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,AboveTheFoldComponent,AboutMeComponent,MySkillsComponent,PortfolioComponent,TeamplayerComponent,FooterComponent,ContactFormComponent, TranslatePipe, TranslateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
        this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
}
