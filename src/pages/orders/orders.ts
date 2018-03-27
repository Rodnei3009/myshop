import { Component } from '@angular/core';

import { AlertController, App, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Orders } from './../../providers/services/orders';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  queryText = '';

  items: Observable<any[]>;

  loading: any;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,

    public orders: Orders
  ) { }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: ''
    });
  
    this.loading.present();
  }

  refresh(refresher: Refresher) {
    this.getOrders();

    setTimeout(() => {
      refresher.complete();

      const toast = this.toastCtrl.create({
        message: 'Lista de clientes atualizada.',
        duration: 1500
      });
      toast.present();
    }, 1000);
  }

  ionViewDidLoad() {
    this.app.setTitle('Clientes');

    //this.presentLoading();
    this.getOrders();
  }

  getOrders() {
    this.items = this.orders.getOrders(this.queryText);

    this.items.subscribe(() => {
      //this.loading.dismiss();
    });

    //this.loading.dismiss();
  }

  setOrder(order) {
    console.log(order);
    // this.navCtrl.push(OrdersFormPage, { data: order, edit: true });
  }

  newOrder() {
    // this.navCtrl.push(OrdersFormPage, { data: { }, edit: false });
  }

  deleteOrder(id) {
    console.log(id);
  }
}
