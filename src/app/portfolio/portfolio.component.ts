import { Component } from '@angular/core';
import { Projects } from '../shared/interfaces/projects';
import { PortfolioItemComponent } from "./portfolio-item/portfolio-item.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [PortfolioItemComponent, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects:Array<Projects> = [
    {
      name: "Join",
      image: "/assets/images/portfolio_section/join.png",
      hoverImage:"/assets/images/portfolio_section/join-hover.png",
      description: "projects.join.description",
      languages: "Angular | TypeScript | HTML | CSS | Firebase",
      gitlink: "https://github.com/devminded55/join",
      testlink: "#",
    },
    {
      name: "Pollo Loco",
      image: "/assets/images/portfolio_section/pollo-loco.png",
      hoverImage:"/assets/images/portfolio_section/pollo-loco-hover.png",
      description: "projects.polloLoco.description",
      languages: "JavaScript | HTML | CSS",
      gitlink: "https://github.com/devminded55/El-Pollo-Loco",
      testlink: "https://burak-keles.developerakademie.net/Projekte/El%20Pollo%20Loco",
    }
  ]
}
