import { Component } from '@angular/core';
import { Feedbacks } from '../shared/interfaces/feedbacks';
import { FeedbackItemComponent } from "./feedback-item/feedback-item.component";
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-teamplayer',
  imports: [FeedbackItemComponent, TranslatePipe],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {
  feedbacks:Array<Feedbacks> = [
    {
      name: "Noah Mueller",
      project: "Project Sharkie",
      personalFeedbacks: "teamplayer.feedback1.personalFeedbacks",
    },
    {
      name: "Evelyn Marx",
      project: "Project Pollo Loco",
      personalFeedbacks: "teamplayer.feedback2.personalFeedbacks",
    },
    {
      name: "James Rugman",
      project: "Project Join",
      personalFeedbacks: "teamplayer.feedback3.personalFeedbacks",
    }
  ]
}
