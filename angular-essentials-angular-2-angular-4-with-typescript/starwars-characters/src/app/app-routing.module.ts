import { NgModule } from "@angular/core";
import { TabsComponent } from "./tabs/tabs.component";
import { CreateCharacterComponent } from "./create-character/create-character.component";
import { ListComponent } from "./list/list.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "characters",
    component: TabsComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "all" },
      { path: ":side", component: ListComponent },
    ],
  },
  {
    path: "new-character",
    loadChildren: () =>
      import("./create-character/create-character.module").then(
        (m) => m.CreateCharacterModule
      ),
  },
  { path: "**", redirectTo: "/characters/all" },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
