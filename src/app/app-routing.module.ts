import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { KendoApiGridComponent } from './kendo-api-grid/kendo-api-grid.component';
import { KendoApiGridFormEditComponent } from './kendo-api-grid-form-edit/kendo-api-grid-form-edit.component';

const routes: Routes = [
  { path: 'kendo-grid', component: KendoGridComponent },
  { path: 'kendo-api-grid', component: KendoApiGridComponent },
  { path: 'kendo-api-grid-form-edit', component: KendoApiGridFormEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
