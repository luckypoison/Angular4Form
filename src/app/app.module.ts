import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateComponentComponent } from './template-component/template-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { PhoneValidateDirective } from './directive/phone-validate.directive';
import { PasswordValidateDirective } from './directive/password-validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponentComponent,
    ReactiveFormComponent,
    ReactiveRegisterComponent,
    PhoneValidateDirective,
    PasswordValidateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
