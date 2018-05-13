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
  orderPaymentMethod: String = '';
  orderSalesMethod: String = '';
  orderDiscount: Number = 0;
  orderShipping: Number = 0;
  orderSubTotal: Number = 0;
  orderDiscountValue: String = '';
  orderDiscountPercent: Number = 0;
  orderDiscountPercentValue: Number = 0;
  orderTotalCosts: String = '';

  orderSubTotalCurrencyFormatted: String = '';
  orderDiscountCurrencyFormatted: String = '';
  orderShippingCurrencyFormatted: String = '';
  orderTotalCurrencyFormatted: String = '';

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
      this.orderId = 123;//this.navParams.get('data').;
      this.orderCustomerName = this.navParams.get('data').nomCliente;
      this.orderDate = this.navParams.get('data').dataHora;
      this.orderCustomerCellphone = this.navParams.get('data').celCliente;
      this.orderPaymentMethod = this.navParams.get('data').formaPagamento;
      this.orderSalesMethod = this.navParams.get('data').formaVenda;

      this.orderDiscount = this.navParams.get('data').desconto ? Number(this.navParams.get('data').desconto) : 0;
      this.orderSubTotal = this.navParams.get('data').valTotal ? Number(this.navParams.get('data').valTotal) : 0;
      this.orderDiscountPercent = this.orderDiscount ? Number(this.orderDiscount) / 100 : 0;
      this.orderDiscountPercentValue = this.orderDiscountPercent ? Number(this.orderSubTotal) * Number(this.orderDiscountPercent) : 0;

      this.orderSubTotalCurrencyFormatted = Number(this.orderSubTotal).toFixed(2).replace(/\./g, ',');
      this.orderDiscountCurrencyFormatted = Number(this.orderDiscountPercentValue).toFixed(2).replace(/\./g, ',');
      this.orderTotalCurrencyFormatted = Number(Number(this.orderSubTotal) - Number(this.orderDiscountPercentValue)).toFixed(2).replace(/\./g, ',');
      this.orderShippingCurrencyFormatted = Number(this.orderShipping).toFixed(2).replace(/\./g, ',');

      this.orderProductsList = Object.keys(this.navParams.get('data').itens).map((key) => {
        this.navParams.get('data').itens[key].valVenda = (this.navParams.get('data').itens[key]).valVenda.replace('.',',')

        const item = [ (key), this.navParams.get('data').itens[key] ]

        return item;
      });
    } else {
      this.orderId = '';
    }
  }

  ionViewDidLoad() {
    this.app.setTitle('Visualizar pedido');
  }
}
