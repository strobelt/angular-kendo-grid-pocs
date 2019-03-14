import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { GridDataResult, SelectableSettings } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { map } from 'rxjs/operators';
import { Product } from '../product.model';

@Component({
    selector: 'app-kendo-api-grid-form-edit',
    templateUrl: './kendo-api-grid-form-edit.component.html',
    styleUrls: ['./kendo-api-grid-form-edit.component.scss']
})
export class KendoApiGridFormEditComponent implements OnInit {
    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    public formGroup: FormGroup;
    public editDataItem: Product;
    public isNew: boolean;

    constructor(private productService: ProductService) { }

    public ngOnInit(): void {
        this.view = this.productService.pipe(map(data => process(data, this.gridState)));

        this.productService.read();
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.productService.read();
    }

    public selectableOptions: SelectableSettings = {
        checkboxOnly: false,
        mode: 'multiple'
    };

    public sortable = {
        allowUnsort: true,
        mode: 'multiple'
    };

    public addHandler() {
        this.editDataItem = {} as Product;
        this.isNew = true;
    }

    public editHandler({ dataItem }) {
        this.editDataItem = dataItem;
        this.isNew = false;
    }

    public cancelHandler() {
        this.editDataItem = undefined;
    }

    public saveHandler(product: Product) {
        this.productService.save(product, this.isNew);
        this.editDataItem = undefined;
    }

    public removeHandler({ dataItem }) {
        this.productService.remove(dataItem);
    }
}