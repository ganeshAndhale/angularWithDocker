import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { NewServiceModule } from './new-service/new-serv.module';
import {NewServeComponent} from './new-service/new-service.component';
import { NewServiceCall } from './new-service/new-serv.service';


@NgModule({
  declarations: [
    AppComponent,
    NewServeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule
  ],
  exports: [],
  providers: [HttpClient, NewServiceCall],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
