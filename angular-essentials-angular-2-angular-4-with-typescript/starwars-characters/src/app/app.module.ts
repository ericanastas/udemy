import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { StarWarsService } from "./star-wars.services";
import { LogService } from "./log.service";
import { CreateCharacterComponent } from "./create-character/create-character.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
