import { Directive, Input, forwardRef } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appTrimMinLength][ngModel]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TrimMinLengthValidatorDirective),
      multi: true,
    },
  ],
})
export class TrimMinLengthValidatorDirective implements Validator {
  @Input() appTrimMinLength = 2;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = (control.value ?? '').toString().trim();
    if (!value) {
      return { required: true };
    }
    if (value.length < this.appTrimMinLength) {
      return {
        minlength: {
          requiredLength: this.appTrimMinLength,
          actualLength: value.length,
        },
      };
    }
    return null;
  }
}
