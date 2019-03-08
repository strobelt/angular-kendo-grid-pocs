import { Component, OnInit } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from './products';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.scss']
})
export class KendoGridComponent implements OnInit {
  public state: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'and',
      filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
    },
    group: [{ field: 'Category.CategoryName' }]
  };
  public gridView: GridDataResult;

  public ngOnInit() {
    this.loadProducts();
  }

  public dataStateChange(dataState: DataStateChangeEvent): void {
    this.state = dataState;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = process(sampleProducts, this.state);
  }
}
