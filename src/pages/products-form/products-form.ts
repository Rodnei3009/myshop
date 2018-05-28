import { Component, ViewChild } from '@angular/core';

import { AlertController, App, NavController, LoadingController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';

import { Products } from './../../providers/services/products';

@Component({
  selector: 'page-products-form',
  templateUrl: 'products-form.html'
})
export class ProductsFormPage {
  form: FormGroup;
  data: String = '';
  edit: Boolean = false;
  queryText: String = '';
  productId: any = '';
  barcode: string = "";
  barcodeResult: BarcodeScanResult;

  @ViewChild('inputBarcode') myInputBarcode;
  @ViewChild('inputCor') myInputCor;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder,

    public products: Products,
    public barcodeScanner: BarcodeScanner
  ) {
    this.form = this.formBuilder.group({
      codBarras: [this.navParams.get('data').codBarras, Validators.required],
      marca: [this.navParams.get('data').marca],
      codigo: [this.navParams.get('data').codigo, Validators.required],
      desc: [this.navParams.get('data').desc],
      desc_lower: [this.navParams.get('data').desc_lower],
      cor: [this.navParams.get('data').cor],
      tamanho: [this.navParams.get('data').tamanho],
      valCompra: [this.navParams.get('data').valCompra],
      valVenda: [this.navParams.get('data').valVenda],
      qtd_disp: [this.navParams.get('data').qtd_disp]
    });

    this.data = this.navParams.get('data');
    this.edit = this.navParams.get('edit');

    if (this.edit === true) {
      this.productId = this.navParams.get('data').key;
    } else {
      this.productId = '';
    }
  }

  ionViewDidLoad() {
    this.app.setTitle('Novo Produto');
    setTimeout(() => {
      this.myInputBarcode.setFocus();
    },600); //a least 150ms.
  }

  corFocus() {
    //alert('aaa');
    setTimeout(() => {
      this.myInputCor.setFocus();
    },600); //a least 150ms.
  }

  onQtyKeyPress(event) {
    if(!/^[0-9]$/g.test(event.key)) {
      event.preventDefault()
      return false
    }
  }

  onSubmit() {
    if(this.productId && this.edit === true) {
      this.products.patchProduct(this.productId, this.form.value);
    } else {
      this.products.postProduct(this.form.value);
    }
    
    this.navCtrl.pop();
  }

  onScan() {
    this.barcodeScanner.scan().then((barcodeResult: BarcodeScanResult) => {
      this.barcodeResult = barcodeResult;
      this.barcode = this.barcodeResult.text;
      this.form.patchValue({'codBarras' : this.barcode});
    }).catch((error: Error) => {
      console.log('barcode error: ', error);
    });
  }
}
