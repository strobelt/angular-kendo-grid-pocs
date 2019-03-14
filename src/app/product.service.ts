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
    private apiUrl = 'http://localhost:3000/products'

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

    public reset = () => this.data = [];

    public save(product: Product, isNew?: boolean) {
        this.reset();

        let $save: Observable<Product>;
        if (isNew)
            $save = this.create(product);
        else
            $save = this.update(product);

        $save.subscribe(() => this.read(), () => this.read());
    }

    public remove(product: Product) {
        this.reset();

        this.delete(product)
            .subscribe(() => this.read(), () => this.read());
    }

    private create = (product: Product): Observable<Product> =>
        this.http
            .post(`${this.apiUrl}/`, product)
            .pipe(map(res => <Product>res));

    private update = (product: Product): Observable<Product> =>
        this.http
            .put(`${this.apiUrl}/${product._id}`, product)
            .pipe(map(res => <Product>res));

    private delete = (product: Product): Observable<any> =>
        this.http
            .delete(`${this.apiUrl}/${product._id}`);

    private fetch = (): Observable<Product[]> =>
        this.http
            .get(`${this.apiUrl}`)
            .pipe(
                map(res => (<Product[]>res).map(p => <Product>{ ...p, firstOrderedOn: new Date(p.firstOrderedOn) }))
            );
}
