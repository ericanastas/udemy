import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SucessAlertComponent } from './sucessalert/sucessalert.component';
import { WarningAlertComponent } from './warningalert/warningalert.component';

@NgModule({
  declarations: [
    AppComponent,
    SucessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
