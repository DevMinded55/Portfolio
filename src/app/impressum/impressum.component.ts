import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LegalNavigationService } from '../shared/services/legal-navigation.service';

@Component({
  selector: 'app-impressum',
  imports: [TranslatePipe, HeaderComponent, FooterComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  private readonly legalNav = inject(LegalNavigationService);

  goBackHome(): void {
    this.legalNav.navigateBackHome();
  }
}