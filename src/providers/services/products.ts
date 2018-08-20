import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()

export class Products {
  itemsRef: any;
  items: Observable<any[]>;


  list: string = '/produtos/';

  constructor(public firebase: AngularFireDatabase) {}

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
   
    if(product.key) {
      this.firebase.list(this.list).remove(product.key);
    }
  }

  public searchProduct (barcode) {

    return true;
  }


}
