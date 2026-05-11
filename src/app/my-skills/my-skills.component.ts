import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skills } from '../shared/interfaces/skills';
import { SkillsItemComponent } from './skill-item/skill-item.component';
import { TranslatePipe } from "@ngx-translate/core";
import { ScrollToContactDirective } from '../shared/directives/scroll-to-contact.directive';
import { RevealOnScrollDirective } from '../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-my-skills',
  imports: [SkillsItemComponent, CommonModule, TranslatePipe, ScrollToContactDirective, RevealOnScrollDirective],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills: Array<Skills> = [
    {
      name: "Angular",
      image: "assets/images/my_skills_section/angular.png",
    },
    {
      name: "TypeScript",
      image: "assets/images/my_skills_section/typescript.png",
    },
    {
      name: "JavaScript",
      image: "assets/images/my_skills_section/javascript.png",
    },
    {
      name: "HTML",
      image: "assets/images/my_skills_section/html.png",
    },
    {
      name: "CSS",
      image: "assets/images/my_skills_section/css.png",
    },
    {
      name: "Rest-Api",
      image: "assets/images/my_skills_section/rest_api.png",
    },
    {
      name: "GIT",
      image: "assets/images/my_skills_section/git.png",
    },
    {
      name: "Material Design",
      image: "assets/images/my_skills_section/material_design.png",
    },
    {
      name: "Scrum",
      image: "assets/images/my_skills_section/scrum.png",
    },
    {
      name: "Vue.js",
      image: "assets/images/my_skills_section/vue_js.png",
    },
    {
      name: "Challenge me",
      image: "assets/images/my_skills_section/challenge-me.png",
    },
  ];

  showText: boolean = false;

  onMouseEnter(index: number): void {
    this.showText = index === this.skills.length - 1;
  }

  onMouseLeave(): void {
    this.showText = false;
  }
}