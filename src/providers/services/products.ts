import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()

export class Products {
  itemsRef: any;
  items: Observable<any[]>;

  list: string = '/produtos/';

  constructor(public firebase: AngularFireDatabase) { }

  public getProducts (query) {
    this.itemsRef = this.firebase.list(this.list, ref => ref.orderByChild('desc')).snapshotChanges();

    this.items = (this.itemsRef.map(
      item => (item.filter(
        subItem => subItem.payload.val()).map(
          subItem => (query && subItem.payload.val().desc && subItem.payload.val().codigo && subItem.payload.val().codBarras ?
            subItem.payload.val().desc.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
            subItem.payload.val().codigo.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
            subItem.payload.val().codBarras.toLowerCase().indexOf(query.toLowerCase()) >= 0 :
            false ) ?
          { key: subItem.payload.key, ...subItem.payload.val() } :
          false
        )
      )
    )).filter(item => {
      return item
    });

    return this.items;
  }

  public postProduct (product) {
    this.firebase.list(this.list).push(product);
  }

  public patchProduct (id, product) {
    this.firebase.list(this.list).update(id, product);
  }

  public deleteProduct (product) {
    /* const date = new Date();
    const time = date.getFullYear() + "-" + String(date.getMonth() + 1) + "-" + date.getDate() + " " + String(date.getHours() + 1) + ":" + String(date.getMinutes() + 1) + ":" + String(date.getSeconds() + 1);

    const deleted = Object.assign({}, product, { deleted: {
      'userName': 'Davisa',
      'createdAt': time
    } });

    const key = product.key || '0112358132134558914423337761098715972584'; */

    if(product.key) {
      this.firebase.list(this.list).remove(product.key);
    }
  }
}
