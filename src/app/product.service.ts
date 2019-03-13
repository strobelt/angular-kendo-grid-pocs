import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { Product } from './product.model';
import { IntlService } from '@progress/kendo-angular-intl';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

@Injectable()
export class ProductService extends BehaviorSubject<Product[]> {
    constructor(private http: HttpClient) {
        super([]);
    }

    private data: any[] = [];

    public read() {
        if (this.data.length) {
            return super.next(this.data);
        }

        this.fetch()
            .pipe(
                tap(data => {
                    this.data = data;
                })
            )
            .subscribe(data => {
                super.next(data);
            });
    }


    private fetch = (): Observable<any[]> =>
        this.http
            .get(`http://localhost:3000/products`)
            .pipe(
                map(res => (<Product[]>res).map(p => <Product>{ ...p, firstOrderedOn: new Date(p.firstOrderedOn) }))
            );
}
