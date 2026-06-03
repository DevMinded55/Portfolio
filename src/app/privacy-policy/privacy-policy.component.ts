import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';
import { LegalNavigationService } from '../shared/services/legal-navigation.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, FooterComponent, TranslatePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  private readonly legalNav = inject(LegalNavigationService);

  goBackHome(): void {
    this.legalNav.navigateBackHome();
  }
}
