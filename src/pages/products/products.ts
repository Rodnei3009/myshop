import { Component } from '@angular/core';

import { AlertController, App, NavController, NavParams, ToastController, LoadingController, ViewController, Refresher } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Products } from './../../providers/services/products';

import { ProductsFormPage } from './../products-form/products-form';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  modal: Boolean = false;
  queryText = '';

  items: Observable<any[]>;

  loading: any;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,

    public products: Products
  ) {
    this.modal = this.navParams.get('modal');
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: ''
    });
  
    this.loading.present();
  }

  refresh(refresher: Refresher) {
    this.getProducts();

    setTimeout(() => {
      refresher.complete();

      const toast = this.toastCtrl.create({
        message: 'Lista de produtos atualizada.',
        duration: 1500
      });
      toast.present();
    }, 1000);
  }

  ionViewDidLoad() {
    this.app.setTitle('Produtos');
    
    this.presentLoading();
    this.getProducts();
  }

  getProducts() {
    this.items = this.products.getProducts(this.queryText);

    this.items.subscribe(() => {
      this.loading.dismiss();
    })
  }

  setProduct(product) {
    if(this.modal) {
      this.dismiss(product);

      return false;
    }

    this.navCtrl.push(ProductsFormPage, { data: product, edit: true });
  }

  newProduct() {
    this.navCtrl.push(ProductsFormPage, { data: { }, edit: false });
  }

  deleteProduct(product) {
    this.products.deleteProduct(product);
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
}
