import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  isLocationHovered = false;
  isRelocateHovered = false;
  isRemoteHovered = false;

  
  readonly icons = {
    location: {
      default: '/assets/images/about_me/icons/location.png',
      hover: '/assets/images/about_me/icons/location-hover.png'
    },
    relocate: {
      default: '/assets/images/about_me/icons/relocate.png',
      hover: '/assets/images/about_me/icons/relocate-hover.png'
    },
    remote: {
      default: '/assets/images/about_me/icons/remote.png',
      hover: '/assets/images/about_me/icons/remote-hover.png'
    }
  };
}
