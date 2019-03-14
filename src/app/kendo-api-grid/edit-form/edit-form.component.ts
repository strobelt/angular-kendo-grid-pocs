import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/product.model';

@Component({
    selector: 'edit-form',
    styleUrls: ['./edit-form.component.scss'],
    templateUrl: './edit-form.component.html'
})

export class EditFormComponent {
    public active = false;
    public editForm: FormGroup;

    @Input() public isNew = false;
    @Input() public set model(product: Product) {
        this.editForm.reset(product);
        this.active = product != undefined;
    }

    @Output() cancel = new EventEmitter();
    @Output() save = new EventEmitter<Product>();

    constructor(private fb: FormBuilder) {
        this.editForm = fb.group({
            '_id': fb.control(''),
            'name': fb.control('', Validators.required),
            'unitPrice': fb.control('', Validators.min(0)),
            'firstOrderedOn': fb.control(new Date())
        });
    }

    public onSave(e): void {
        e.preventDefault();
        this.save.emit(this.editForm.value);
        this.active = false;
    }

    public onCancel(e): void {
        e.preventDefault();
        this.closeForm();
    }

    public closeForm() {
        this.active = false;
        this.cancel.emit();
    }
}