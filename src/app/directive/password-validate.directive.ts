import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { validatePasswordGroup } from '../validator/validators';

@Directive({
  selector: '[appPasswordValidate]',
  providers: [{provide: NG_VALIDATORS, useValue: validatePasswordGroup, multi: true}]
})
export class PasswordValidateDirective {

  constructor() { }

}
