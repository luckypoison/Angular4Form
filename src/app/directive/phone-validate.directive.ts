import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { validatePhone } from '../validator/validators';

@Directive({
  selector: '[appPhoneValidate]',
  providers: [{provide: NG_VALIDATORS, useValue: validatePhone, multi: true}]
})
export class PhoneValidateDirective {

  constructor() { }

}
