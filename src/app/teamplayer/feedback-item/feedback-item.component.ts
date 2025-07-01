import { Component, Input } from '@angular/core';
import { Feedbacks } from '../../shared/interfaces/feedbacks';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-feedback-item',
  imports: [TranslatePipe],
  templateUrl: './feedback-item.component.html',
  styleUrl: './feedback-item.component.scss'
})
export class FeedbackItemComponent {
  @Input() feedbacks!: Feedbacks;
}
