import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LegalReturnDirective } from '../shared/directives/legal-return.directive';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, RouterLink, LegalReturnDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // TODO: LinkedIn-URL nachtragen, sobald Profil verfuegbar (z.B. 'https://www.linkedin.com/in/...')
  readonly linkedinUrl: string = '';
}