import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()

export class Products {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  list: string = '/produtos/';

  constructor(public firebase: AngularFireDatabase) { }

  public getProducts (query) {
    this.itemsRef = this.firebase.list(this.list, ref => ref.orderByChild('desc'));

    this.items = query ? (
      this.itemsRef.snapshotChanges().map(changes => {
        const item = changes.filter(subItem => ((subItem.payload.val().desc.toLowerCase().includes(query.toLowerCase()) ||
          subItem.payload.val().marca.toLowerCase().includes(query.toLowerCase()) ||
          subItem.payload.val().codigo.includes(query) ||
          subItem.payload.val().codBarras.includes(query)) &&
          !subItem.payload.val().deleted)
        );

        return item.map(c => {
          const payload = Object.assign({}, c.payload.val(), {});

          payload.desc = payload.desc ? payload.desc.toUpperCase() : '';
          payload.valVenda = payload.valVenda ? payload.valVenda.replace('.',',') : '';

          return ({ key: c.payload.key, ...payload })
        });
      })
    ) : (
      this.itemsRef.snapshotChanges().map(changes => {
        const item = changes.filter(subItem => !subItem.payload.val().deleted);

        return item.map(c => {
          const payload = Object.assign({}, c.payload.val(), {});

          payload.desc = payload.desc ? payload.desc.toUpperCase() : '';
          payload.valVenda = payload.valVenda ? payload.valVenda.replace('.',',') : '';

          return ({ key: c.payload.key, ...payload })
        })
      })
    );

    return this.items;
  }

  public postProduct (product) {
    this.firebase.list(this.list).push(product);
  }

  public patchProduct (id, product) {
    this.firebase.list(this.list).update(id, product);
  }

  public deleteProduct (product) {
    const date = new Date();
    const time = date.getFullYear() + "-" + String(date.getMonth() + 1) + "-" + date.getDate() + " " + String(date.getHours() + 1) + ":" + String(date.getMinutes() + 1) + ":" + String(date.getSeconds() + 1);

    const deleted = Object.assign({}, product, { deleted: {
      'userName': 'Davisa',
      'createdAt': time
    } });

    const key = product.key || '0112358132134558914423337761098715972584';

    this.firebase.list(this.list).update(key, deleted);
  }
}