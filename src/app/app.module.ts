import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateComponentComponent } from './template-component/template-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponentComponent,
    ReactiveFormComponent,
    ReactiveRegisterComponent
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
