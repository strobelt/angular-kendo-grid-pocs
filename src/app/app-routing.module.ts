import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';

const routes: Routes = [
  { path: 'kendo-grid', component: KendoGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
