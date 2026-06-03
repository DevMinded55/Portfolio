import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealOnScrollDirective } from '../shared/directives/reveal-on-scroll.directive';
import { ScrollToTopDirective } from '../shared/directives/scroll-to-top.directive';
import { TrimMinLengthValidatorDirective } from '../shared/validators/trim-min-length.validator';
import { LegalReturnDirective } from '../shared/directives/legal-return.directive';

@Component({
  selector: 'app-contact-form',
  imports: [
    FormsModule,
    TranslatePipe,
    RouterLink,
    RevealOnScrollDirective,
    ScrollToTopDirective,
    TrimMinLengthValidatorDirective,
    LegalReturnDirective,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  http = inject(HttpClient);

  // TODO: LinkedIn-URL nachtragen, sobald Profil verfuegbar
  readonly linkedinUrl: string = '';

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false,
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',          // Domain URL eintragen
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  sendSuccess = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.sendSuccess = true;
            setTimeout(() =>{
              this.sendSuccess = false;
            }, 3000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      this.sendSuccess = true;
            setTimeout(() =>{
              this.sendSuccess = false;
            }, 3000);
    }
  }

}
