import { Component } from '@angular/core';

import { AlertController, App, NavController, LoadingController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker';

import { Customers } from './../../providers/services/customers';

@Component({
  selector: 'page-customers-form',
  templateUrl: 'customers-form.html'
})
export class CustomersFormPage {
  form: FormGroup;
  data: String = '';
  edit: Boolean = false;
  queryText: String = '';
  customerId: any = '';
  birthday: any;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public datePicker: DatePicker,

    public customers: Customers
  ) {
    this.form = this.formBuilder.group({
      nome: [this.navParams.get('data').nome, Validators.required],
      email: [this.navParams.get('data').email],
      celular: [this.navParams.get('data').celular, Validators.required],
      sexo: [this.navParams.get('data').Sexo],
      prof: [this.navParams.get('data').prof],
      estcivil: [this.navParams.get('data').estcivil],
      aniver: [ this.birthday ],
      CPF: [this.navParams.get('data').CPF],
      RG: [this.navParams.get('data').RG],
      endereco: [this.navParams.get('data').endereco],
      complemento: [this.navParams.get('data').complemento],
      indicacao: [this.navParams.get('data').indicacao]
    });

    this.data = this.navParams.get('data');
    this.edit = this.navParams.get('edit');

    if (this.edit === true) {
      this.customerId = this.navParams.get('data').$key;
    } else {
      this.customerId = '';
    }
  }

  ionViewDidLoad() {
    this.app.setTitle('Novo Cliente');
  }

  getBirthdayPicker() {
    /* this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      response => {
        this.birthday = response;
      }, 
      err => console.log('Error occurred while getting date: ', err)
    ); */
  }

  onSubmit() {
    console.log(this.form.value);
    
    if(this.customerId) {
      console.log(this.customerId, this.form.value);
      this.customers.patchCustomer(this.customerId, this.form.value);
    } else {
      console.log(this.form.value);
      this.customers.postCustomer(this.form.value);
    }
    
    this.navCtrl.pop();
  }
}
