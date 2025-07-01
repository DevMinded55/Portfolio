import { Component, Input } from '@angular/core';
import { Skills } from '../../shared/interfaces/skills';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss'
})
export class SkillsItemComponent {
  @Input() skills!: Skills;
  @Input() showText: boolean = false;
}