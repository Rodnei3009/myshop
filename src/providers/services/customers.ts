import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()

export class Customers {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  list: string = '/clientes/';

  constructor(public firebase: AngularFireDatabase) { }

  public getCustomers (query) {
    this.itemsRef = this.firebase.list(this.list, ref => ref.orderByChild('nome'));

    if(query) {
      if((typeof query) == 'string') {
        query = [ query.toLowerCase(), '' ];
      }

      if((typeof query) == 'object') {
        if(query[0]) query[0] = query[0].toLowerCase();
        if(query[1]) query[1] = query[1].toLowerCase();
      }
    }

    this.items = query.length >= 1 ? (
      this.itemsRef.snapshotChanges().map(changes => {
        let item = changes.filter(subItem => !subItem.payload.val().deleted);
        item = item.filter(subItem => subItem.payload.val().nome.toLowerCase().includes(query[0]));
        if(query.length > 1) item = item.filter(subItem => subItem.payload.val().celular.toLowerCase().includes(query[1]));

        const newItem = item.map(c => {
          const payload = Object.assign({}, c.payload.val(), {});

          payload.nome = payload.nome ? payload.nome.toUpperCase() : '';

          return ({ key: c.payload.key, ...payload })
        });

        return newItem;
      })
    ) : (
      this.itemsRef.snapshotChanges().map(changes => {
        const item = changes.filter(subItem => !subItem.payload.val().deleted);

        const newItem = item.map(c => {
          const payload = Object.assign({}, c.payload.val(), {});

          payload.nome = payload.nome ? payload.nome.toUpperCase() : '';

          return ({ key: c.payload.key, ...payload })
        });

        return newItem;
      })
    );

    return this.items;
  }

  public postCustomer (customer) {
    this.firebase.list(this.list).push(customer);
  }

  public patchCustomer (id, customer) {
    this.firebase.list(this.list).update(id, customer);
  }

  public deleteCustomer (id, customer) {
    const date = new Date();
    const time = date.getFullYear() + "-" + String(date.getMonth() + 1) + "-" + date.getDate() + " " + String(date.getHours() + 1) + ":" + String(date.getMinutes() + 1) + ":" + String(date.getSeconds() + 1);

    const deleted = Object.assign({}, customer, { deleted: {
      'userName': 'Davisa',
      'createdAt': time
    } });

    this.firebase.list(this.list).update(id, deleted);
  }
}