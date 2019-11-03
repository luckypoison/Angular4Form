import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  //FormControl 事例
  username: FormControl = new FormControl('harry');

  //FormGroup 事例
  formModel: FormGroup = new FormGroup({
    time: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    hobbies: new FormArray([
      new FormControl('singing'),
      new FormControl('swimming')
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue: any){
    console.log(this.formModel.value);
  }

  addHobby(){
    let hobbies = this.formModel.get('hobbies') as FormArray;
    hobbies.push(new FormControl);
  }



}
