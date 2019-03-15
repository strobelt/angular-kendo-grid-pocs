import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogModule } from '@progress/kendo-angular-dialog';

import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './product.service';
import { KendoApiGridComponent } from './kendo-api-grid/kendo-api-grid.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IntlModule } from '@progress/kendo-angular-intl';
import { KendoApiGridFormEditComponent } from './kendo-api-grid-form-edit/kendo-api-grid-form-edit.component';
import { EditFormComponent } from './kendo-api-grid/edit-form/edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { TextBoxModule, NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    KendoGridComponent,
    KendoApiGridComponent,
    KendoApiGridFormEditComponent,
    EditFormComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GridModule,
    DatePickerModule,
    BrowserAnimationsModule,
    PDFModule,
    ExcelModule,
    IntlModule,
    DialogModule,
    ReactiveFormsModule,
    TextBoxModule,
    NumericTextBoxModule,
    ButtonModule
  ],
  providers: [
    ProductService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
