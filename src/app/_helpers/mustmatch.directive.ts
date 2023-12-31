import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, UntypedFormGroup } from '@angular/forms';


@Directive({
  selector: '[mustMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustmatchDirective, multi: true }]
})
export class MustmatchDirective implements Validator {

  @Input('mustMatch') mustMatch: string[] = [];

  validate(formGroup: UntypedFormGroup): ValidationErrors {
    return this.MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }

  constructor() { }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: UntypedFormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

}
