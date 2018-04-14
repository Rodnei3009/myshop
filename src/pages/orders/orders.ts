import { Component } from '@angular/core';

import { AlertController, App, NavController, ToastController, LoadingController, Refresher, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Orders } from './../../providers/services/orders';

import { OrdersFormPage } from './../orders-form/orders-form';
import { OrdersViewPage } from './../orders-view/orders-view';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  form: FormGroup;
  data: String = '';
  edit: Boolean = false;
  queryText = '';
  customerId: any = '';

  customersList: Observable<any[]>;
  ordersList: Observable<any[]>;

  loading: any;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,

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
        message: 'Lista de pedidos atualizadas.',
        duration: 1500
      });
      toast.present();
    }, 1000);
  }

  ionViewDidLoad() {
    this.app.setTitle('Pedidos');

    this.presentLoading();
    this.getOrders();
  }

  getOrders() {
    this.ordersList = this.orders.getOrders(this.queryText);

    this.ordersList.subscribe(() => {
      this.loading.dismiss();
    }, (err) => {
      console.log(err);
    });
  }

  setOrder(order) {
    this.navCtrl.push(OrdersViewPage, { data: order, view: true });
  }

  newOrder() {
    this.navCtrl.push(OrdersFormPage);
  }

  deleteOrder(order) {
    this.orders.deleteOrder(order);
  }
}
