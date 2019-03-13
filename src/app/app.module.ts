import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './product.service';
import { KendoApiGridComponent } from './kendo-api-grid/kendo-api-grid.component';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { IntlModule } from '@progress/kendo-angular-intl';

@NgModule({
  declarations: [
    AppComponent,
    KendoGridComponent,
    KendoApiGridComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    PDFModule,
    ExcelModule,
    IntlModule
  ],
  providers: [
    {
      deps: [HttpClient],
      provide: ProductService,
      useFactory: (jsonp: HttpClient) => () => new ProductService(jsonp)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
