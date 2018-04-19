import { Component, ChangeDetectorRef } from '@angular/core';

import { AlertController, App, NavController, ToastController, LoadingController, NavParams, ModalController } from 'ionic-angular';

import { Contacts, ContactFieldType } from '@ionic-native/contacts';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';

import { Customers } from './../../providers/services/customers';
import { Orders } from './../../providers/services/orders';
import { Products } from './../../providers/services/products';

import { UserData } from './../../providers/user-data';

import { CustomersFormPage } from './../customers-form/customers-form';
import { ProductsPage } from './../products/products';

@Component({
  selector: 'page-orders-form',
  templateUrl: 'orders-form.html'
})
export class OrdersFormPage {
  monthsArr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  daysArr = ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

  data: any = {
    celCliente: '',
    nomCliente: '',
    totalItens: '',
    valTotal: '',
    dataHora: '',
    items: []
  };
  queryText: any = '';
  orderId: String = '';
  customer: any = null;
  customerName: String = '';
  customerCellphone: String = '';

  customersList: Observable<any[]>;
  productsList: Observable<any[]>;
  itemsList: any = null;
  itemsQty: Number = 0;
  itemsTotalValue: Number = 0;

  barcode: string = "";
  barcodeResult: BarcodeScanResult;

  loading: any;

  contactFieldtoSearch: ContactFieldType[] = ["phoneNumbers"];

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,

    public customers: Customers,
    public orders: Orders,
    public products: Products,
    public userData: UserData,
    public chRef: ChangeDetectorRef,
    public BarcodeScanner: BarcodeScanner,
    public socialSharing: SocialSharing,
    public contacts: Contacts
  ) {
    
  }

  ionViewDidLoad() {
    this.app.setTitle('Novo pedido');
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: ''
    });
  
    this.loading.present();
  }

  getMessage(type: string) {
    let message: string = "";

    switch(type) {
      case 'sms':
        message = "Obrigado por comprar na Davisa.";
        message = message + "\n";
        message = message + "Detalhes do seu pedido:" + "\n";
    
        this.data.celCliente = this.customerCellphone;
        this.data.nomCliente = this.customer.nome;
        this.data.totalItens = this.itemsQty;
        this.data.valTotal = this.itemsTotalValue;
        this.data.dataHora = this.getDateTime();
        this.data.itens = this.itemsList;
    
        message = message + "Total de itens: " + + this.itemsQty + "\n";
        message = message + "Valor Total: R$ " + this.itemsTotalValue + "\n";
        message = message + "Itens: " + "\n";

        const list = this.itemsList.map(item => {
          const description = item.desc + " -> R$ " + item.desc.valVenda + "\n";

          return {
            description
          };
        })

        message = message + list.join('');
        
        message = message + "Foi um prazer te atender :) ";
        
        break;
      
      case 'email':
        message = "Mensagem de e-mail";

        break;
    }

    return message;
  }

  onSearch() {
    if(this.customerName || this.customerCellphone) {
      this.queryText = [];

      if(this.customerName) {
        this.queryText.push(this.customerName);
      }
      
      if(this.customerCellphone) {
        this.queryText.push('');
        this.queryText.push(this.customerCellphone);
      }

      this.getCustomers();
    }
  }

  onSubmit() {
    let message: string = this.getMessage('sms');
    this.sendSMS(message, this.customerCellphone);

    this.orders.postOrder(this.data);
  }

  setCustomer(customer) {
    this.customer = customer;

    this.chRef.detectChanges();
  }

  getCustomers() {
    this.customersList = this.customers.getCustomers(this.queryText);
  }

  onGetBarcode(): void {
    this.BarcodeScanner.scan().then((barcodeResult: BarcodeScanResult) => {
      this.presentLoading();
      
      this.barcodeResult = barcodeResult;
      this.barcode = this.barcodeResult.text;

      this.productsList = this.products.getProducts(this.barcode);
      this.productsList.subscribe(response => response.forEach(product => this.onNewItem(product)));

      this.loading.dismiss();
    }).catch((error: Error) => {
      console.log('barcode error: ', error);
    });
  }

  onNewItem(product) {
    product.qtd_pedido = 1;

    if(!this.itemsList) this.itemsList = [];

    product.index = this.itemsList.length + 1;

    this.itemsList.push(product);
    this.setTotal();
  }

  setTotal() {
    this.itemsQty = this.itemsList.length;
    this.itemsTotalValue = ((this.itemsList.map(item => parseFloat(item.valVenda))).reduce((total, current)=> total + current)).toFixed(2);
  }

  onNewCustomer() {
    this.navCtrl.push(CustomersFormPage, { data: { }, edit: false });
  }

  presentModal() {
    let modal = this.modalCtrl.create(ProductsPage, { modal: true });
    modal.onDidDismiss(product => this.onNewItem(product));
    modal.present();
  }

  deleteItem(item) {
    this.itemsList = this.itemsList.filter((subItem, index) => (index != item.index - 1 && subItem))

    if(!this.itemsList.length) this.itemsList = null;
  }

  getDateTime() {
    let dateTime = "";

    let date = new Date();
    dateTime = this.daysArr[date.getDate()] + '/' + this.monthsArr[date.getMonth()] + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes();
    
    return dateTime;
  }

  sendSMS(message: string, cellphone: any) {
    this.socialSharing.shareViaSMS(message, cellphone).then(() => {
      alert('SMS com sucesso');
    }).catch(() => {
      alert('SMS com erro');   
    });
  }

  sendEmail(message: string, subject: string, email: string) {
    this.socialSharing.canShareViaEmail().then(() => {
      alert('Envio de e-mail pronto.');
    }).catch(() => {
      alert('E-mail não pode ser enviado.');
    });
    
    this.socialSharing.shareViaEmail(message, subject, [ email ]).then(() => {
      alert('E-mail enviado com sucesso.');
    }).catch(() => {
      alert('Erro ao enviar email.');
    });
  }

  onSendSMS() {
    let message: string = this.getMessage('sms');

    this.sendSMS(message, this.customerCellphone);
  }

  onSendEmail() {
    let message: string = this.getMessage('email');
    let subject: string = "Pedido Davida";
    let email: string = this.userData.ORDER_EMAIL_TO;

    this.sendEmail(message, subject, email);
  }

  onSendWhats1(message, cellphone) {
    this.socialSharing.shareViaWhatsApp(message, cellphone, '').then(() => {
      alert('whats com sucesso');
    }).catch(() => {
      alert('whats com erro');
    });
  }

  onSendWhats2() {
    // let strQuery: string = '02111984888468';
    let strQuery: string = '02119991405043';

    this.contacts.find(this.contactFieldtoSearch, { filter: strQuery }).then((contacts) => {
      alert(contacts);
    }).catch((err) => {
      alert('Error' + JSON.stringify(err));
    });
  }
}
