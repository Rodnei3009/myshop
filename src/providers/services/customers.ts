import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()

export class Customers {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public firebase: AngularFireDatabase) { }

  public getCustomers (query) {
    this.itemsRef = this.firebase.list('/clientes/', ref => ref.orderByChild('nome'));

    this.items = query ? (
      this.itemsRef.snapshotChanges().map(changes => {
        const item = changes.filter(subItem => ((subItem.payload.val().nome.toLowerCase().includes(query.toLowerCase())) && !subItem.payload.val().delete));

        return item.map(c => {
          const payload = Object.assign({}, c.payload.val(), {});

          payload.nome = payload.nome.toUpperCase();

          return ({ key: c.payload.key, ...payload })
        });
      })
    ) : (
      this.itemsRef.snapshotChanges().map(changes => {
        const item = changes.filter(subItem => !subItem.payload.val().delete);

        return item.map(c => {
          const payload = Object.assign({}, c.payload.val(), {});

          payload.nome = payload.nome.toUpperCase();

          return ({ key: c.payload.key, ...payload })
        })
      })
    );

    return this.items;
  }

  public postCustomer (customer) {
    this.firebase.list('/clientes/').push(customer);
  }

  public patchCustomer (id, customer) {
    this.firebase.list('/clientes/').update(id, customer);
  }

  public deleteCustomer (customer) {
    const date = new Date();
    const time = date.getFullYear() + "-" + String(date.getMonth() + 1) + "-" + date.getDate() + " " + String(date.getHours() + 1) + ":" + String(date.getMinutes() + 1) + ":" + String(date.getSeconds() + 1);

    const deleted = Object.assign({}, customer, { delete: {
      'userName': 'Davisa',
      'createdAt': time
    } });

    const key = customer.key || '0112358132134558914423337761098715972584';

    this.firebase.list('/clientes/').update(key, deleted);
  }
}