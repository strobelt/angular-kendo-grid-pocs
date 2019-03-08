import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    KendoGridComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    PDFModule,
    ExcelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
