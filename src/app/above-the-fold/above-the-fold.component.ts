import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollToContactDirective } from '../shared/directives/scroll-to-contact.directive';
import { RevealOnScrollDirective } from '../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-above-the-fold',
  imports: [TranslatePipe, ScrollToContactDirective, RevealOnScrollDirective],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

}
