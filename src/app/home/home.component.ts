import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TeamplayerComponent } from '../teamplayer/teamplayer.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    TeamplayerComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
