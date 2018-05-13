import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()

export class Orders {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  list: string = '/pedidos/';

  constructor(public firebase: AngularFireDatabase) { }

  public getOrders (query) {
    this.itemsRef = this.firebase.list(this.list, ref => ref);

    this.items = query ? (
      this.itemsRef.snapshotChanges().map(changes => {
        const item = changes.filter(subItem => ((subItem.payload.val().nomCliente.toLowerCase().includes(query.toLowerCase())) && !subItem.payload.val().deleted));

        return item.map(c => {
          const payload = Object.assign({}, c.payload.val(), {});

          payload.nomCliente = payload.nomCliente ? payload.nomCliente.toUpperCase() : '';
          payload.valVenda = payload.valVenda ? payload.valVenda.replace('.',',') : '';
          
          const dateTime = payload.dataHora.split(' - ');
          const time = dateTime[0] ? dateTime[0].split(':') : '';
          const date = dateTime[1] ? dateTime[1].split('/') : '';
          const createdAt = new Date(date[2] + '-' + date[1] + '-' + date[0] + ' ' + time[0] + ':' + time[1]);

          payload.date = dateTime[0];
          payload.createdAt = createdAt;

          return ({ key: c.payload.key, ...payload })
        });
      })
    ) : (
      this.itemsRef.snapshotChanges().map(changes => {
        const item = changes.filter(subItem => !subItem.payload.val().deleted);

        return item.map(c => {
          const payload = Object.assign({}, c.payload.val(), {});

          payload.nomCliente = payload.nomCliente ? payload.nomCliente.toUpperCase() : '';
          payload.valVenda = payload.valVenda ? payload.valVenda.replace('.',',') : '';

          const dateTime = payload.dataHora.split(' - ');
          if(dateTime.length > 1) {
            const time = dateTime[0].split(':');
            const date = dateTime[1].split('/');
            const createdAt = new Date(date[2] + '-' + date[1] + '-' + date[0] + ' ' + time[0] + ':' + time[1]);

            payload.createdAt = createdAt;
          }
          
          payload.date = dateTime[0];

          return ({ key: c.payload.key, ...payload })
        })
      })
    );

    return this.items;
  }

  public postOrder (order) {
    this.firebase.list(this.list).push(order);
  }

  public deleteOrder (order) {
    const date = new Date();
    const time = date.getFullYear() + "-" + String(date.getMonth() + 1) + "-" + date.getDate() + " " + String(date.getHours() + 1) + ":" + String(date.getMinutes() + 1) + ":" + String(date.getSeconds() + 1);

    const deleted = Object.assign({}, order, { deleted: {
      'userName': 'Davisa',
      'createdAt': time
    } });

    const key = order.key || '0112358132134558914423337761098715972584';

    this.firebase.list(this.list).update(key, deleted);
  }
}