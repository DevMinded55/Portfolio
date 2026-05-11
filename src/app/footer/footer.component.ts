import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // TODO: LinkedIn-URL nachtragen, sobald Profil verfuegbar (z.B. 'https://www.linkedin.com/in/...')
  readonly linkedinUrl: string = '';
}