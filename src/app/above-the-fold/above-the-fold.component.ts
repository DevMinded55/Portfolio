import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";
import { ScrollToContactDirective } from '../shared/directives/scroll-to-contact.directive';

@Component({
  selector: 'app-above-the-fold',
  imports: [TranslatePipe, ScrollToContactDirective],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

}
