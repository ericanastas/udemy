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
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {
    path: "characters",
    component: TabsComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "all" },
      { path: ":side", component: ListComponent },
    ],
  },
  { path: "new-character", component: CreateCharacterComponent },
  { path: "**", redirectTo: "/characters/all" },
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
