import { Component } from '@angular/core';

import { AlertController, App, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Customers } from './../../providers/services/customers';

import { CustomersFormPage } from './../customers-form/customers-form';

@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html'
})
export class CustomersPage {
  queryText = '';

  items: Observable<any[]>;

  loading: any;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,

    public customers: Customers
  ) {
    
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: ''
    });
  
    this.loading.present();
  }

  refresh(refresher: Refresher) {
    this.getCustomers();

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

    this.presentLoading();
    this.getCustomers();
  }

  getCustomers() {
    this.items = this.customers.getCustomers(this.queryText);

    this.items.subscribe(() => {
      this.loading.dismiss();
    })
  }

  setCustomer(customer) {
    this.navCtrl.push(CustomersFormPage, { data: customer, edit: true });
  }

  newCustomer() {
    this.navCtrl.push(CustomersFormPage, { data: { }, edit: false });
  }

  deleteCustomer(customer) {
    this.customers.deleteCustomer(customer);
  }
}
