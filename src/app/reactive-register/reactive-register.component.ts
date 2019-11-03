import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { validatePhone, validatePasswordGroup } from '../validator/validators';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {
  [x: string]: any;


  formModel: FormGroup;


  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
        username: ['', [Validators.required, Validators.minLength(6)]],
        phone: ['', [validatePhone]],
        passwordGroup: fb.group({
          password: ['', [Validators.minLength(6)]],
          confirmPassword: ['']
        }, {validator: validatePasswordGroup})
    });
  }

  onSubmit(){
    // let isValid: boolean = this.formModel.get('passwordGroup').valid;
    // let errorMsg: any = this.formModel.get('passwordGroup').errors;
    // 控制如果整个表单都合法的情况下，才可以进行submit
    console.log(this.formModel.valid);
  }
  ngOnInit() {
  }

}
