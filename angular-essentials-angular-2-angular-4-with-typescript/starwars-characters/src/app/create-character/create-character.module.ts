import { NgModule } from "@angular/core";
import { CreateCharacterComponent } from "./create-character.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: CreateCharacterComponent }];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(routes), CommonModule],
  declarations: [CreateCharacterComponent],
  exports: [CreateCharacterComponent],
})
export class CreateCharacterModule {}
