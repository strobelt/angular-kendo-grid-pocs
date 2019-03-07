import { Component, OnInit } from '@angular/core';
import { GroupDescriptor, DataResult, process } from '@progress/kendo-data-query';
import { products } from './products';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.scss']
})
export class KendoGridComponent implements OnInit {
  public groups: GroupDescriptor[] = [{ field: 'Category.CategoryName' }];

  public gridView: DataResult;

  public ngOnInit() {
    this.loadProducts();
  }

  public groupChange(groups: GroupDescriptor[]): void {
    this.groups = groups;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = process(products, { group: this.groups });
  }
}
