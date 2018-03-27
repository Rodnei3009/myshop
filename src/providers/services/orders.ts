import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()

export class Orders {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public firebase: AngularFireDatabase) { }

  public getOrders (query) {
    this.itemsRef = this.firebase.list('/pedidos/', ref => ref);

    this.items = query ? (
      this.itemsRef.snapshotChanges().map(changes => {
        const item = changes.filter(subItem => ((subItem.payload.val().nome.toLowerCase().includes(query.toLowerCase())) && !subItem.payload.val().delete));

        return item.map(c => {
          const payload = Object.assign({}, c.payload.val(), {});

          payload.desc = payload.desc.toUpperCase();

          console.log(payload);

          return ({ key: c.payload.key, ...payload })
        });
      })
    ) : (
      this.itemsRef.snapshotChanges().map(changes => {
        const item = changes.filter(subItem => !subItem.payload.val().delete);

        return item.map(c => {
          const payload = Object.assign({}, c.payload.val(), {});

          payload.desc = payload.desc.toUpperCase();

          console.log(payload);

          return ({ key: c.payload.key, ...payload })
        })
      })
    );

    return this.items;
  }
}