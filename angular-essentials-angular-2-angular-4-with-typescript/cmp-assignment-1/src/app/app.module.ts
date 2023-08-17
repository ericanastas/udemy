import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardComponent } from "./dashboard.component";
import { FormsModule } from "@angular/forms"; //<========

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
