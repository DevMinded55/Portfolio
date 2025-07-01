import { Component, Input } from '@angular/core';
import { Projects } from '../../shared/interfaces/projects';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-item',
  imports: [TranslatePipe],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss'
})
export class PortfolioItemComponent {
  @Input() projects!: Projects;
  @Input() index!: number;

  isHovered: boolean = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
