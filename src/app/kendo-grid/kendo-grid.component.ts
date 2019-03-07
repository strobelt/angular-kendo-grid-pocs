import { Component, OnInit } from '@angular/core';
import { GroupDescriptor, process, State, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { sampleProducts } from './products';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.scss']
})
export class KendoGridComponent implements OnInit {
  public groups: GroupDescriptor[] = [{ field: 'Category.CategoryName' }];

  public state: State = {
    filter: {
      logic: 'and',
      filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
    }
  };
  public gridView: GridDataResult;

  public ngOnInit() {
    this.loadProducts();
  }

  public dataStateChange(dataState: DataStateChangeEvent): void {
    this.state = dataState;
    this.groups = dataState.group;
    this.loadProducts
  }

  private loadProducts(): void {
    this.gridView = process(sampleProducts, { ...this.state });
  }
}
