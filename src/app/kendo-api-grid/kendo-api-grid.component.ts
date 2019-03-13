import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult, SelectableSettings } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { map } from 'rxjs/operators/map';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
    selector: 'app-kendo-api-grid',
    templateUrl: './kendo-api-grid.component.html',
    styleUrls: ['./kendo-api-grid.component.scss']
})
export class KendoApiGridComponent implements OnInit {
    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    public formGroup: FormGroup;

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

    public editHandler({ sender, rowIndex, dataItem }) {
        // define all editable fields validators and default values
        const group = new FormGroup({
            '_id': new FormControl(dataItem._id),
            'name': new FormControl(dataItem.name, Validators.required),
            'unitPrice': new FormControl(dataItem.unitPrice),
            'firstOrderedOn': new FormControl(dataItem.firstOrderedOn)
        });

        // put the row in edit mode, with the `FormGroup` build above
        sender.editRow(rowIndex, group);
    }
    public cancelHandler({ sender, rowIndex }) {
        // close the editor for the given row
        sender.closeRow(rowIndex)
    }
    public saveHandler({ sender, rowIndex, formGroup, isNew }) {
        const product: Product = formGroup.value;

        this.productService.save(product, isNew);

        sender.closeRow(rowIndex);
    }
    public removeHandler() { }
    public addHandler() { }
}
