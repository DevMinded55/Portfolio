import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollToContactDirective } from '../shared/directives/scroll-to-contact.directive';
import { RevealOnScrollDirective } from '../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about-me',
  imports: [TranslatePipe, ScrollToContactDirective, RevealOnScrollDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  readonly icons = {
    location: {
      default: 'assets/images/about_me/icons/location.png',
      hover: 'assets/images/about_me/icons/location-hover.png'
    },
    relocate: {
      default: 'assets/images/about_me/icons/relocate.png',
      hover: 'assets/images/about_me/icons/relocate-hover.png'
    },
    remote: {
      default: 'assets/images/about_me/icons/remote.png',
      hover: 'assets/images/about_me/icons/remote-hover.png'
    }
  };
}
