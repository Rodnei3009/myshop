import { Component } from '@angular/core';

import { AlertController, App, NavController, ToastController, LoadingController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder } from '@angular/forms';

import 'rxjs/add/operator/map';

import { Orders } from './../../providers/services/orders';

@Component({
  selector: 'page-orders-view',
  templateUrl: 'orders-view.html'
})
export class OrdersViewPage {
  form: FormGroup;
  view: Boolean = false;
  queryText = '';
  orderId: any = '';
  orderCustomerName: String = '';
  orderDate: String = '';
  orderCustomerCellphone: String = '';
  orderTotalCosts: String = '';

  orderProductsList: Array<Object>;

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
  ) {
    this.view = this.navParams.get('view');

    if (this.view === true) {
      console.log(this.navParams.get('data'));

      this.orderId = 123;//this.navParams.get('data').;
      this.orderCustomerName = this.navParams.get('data').nomCliente;
      this.orderDate = this.navParams.get('data').dataHora;
      this.orderCustomerCellphone = this.navParams.get('data').celCliente;
      this.orderTotalCosts = Number(this.navParams.get('data').valTotal).toFixed(2).replace(/\./g, ',');
      this.orderProductsList = Object.keys(this.navParams.get('data').itens).map((key) => {
        return [ (key), this.navParams.get('data').itens[key] ];
      });
    } else {
      this.orderId = '';
    }
  }

  ionViewDidLoad() {
    this.app.setTitle('Visualizar pedido');
  }
}
