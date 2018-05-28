import { Component, ViewChild } from '@angular/core'

import { AlertController, App, NavController, LoadingController, NavParams } from 'ionic-angular'

import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Customers } from './../../providers/services/customers'

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

  @ViewChild('inputNome') myInputNome;
  @ViewChild('inputProf') myInputProf;


  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,

    public customers: Customers
  ) {
    this.form = this.formBuilder.group({
      nome: [ this.navParams.get('data').nome, Validators.required ],
      email: [ this.navParams.get('data').email ],
      celular: [ this.navParams.get('data').celular, Validators.required ],
      Sexo: [ this.navParams.get('data').Sexo ],
      prof: [ this.navParams.get('data').prof ],
      estcivil: [ this.navParams.get('data').estcivil ],
      aniver: [ this.navParams.get('data').aniver ],
      CPF: [ this.navParams.get('data').CPF ],
      RG: [ this.navParams.get('data').RG ],
      endereco: [ this.navParams.get('data').endereco ],
      complemento: [ this.navParams.get('data').complemento ],
      indicacao: [ this.navParams.get('data').indicacao ]
    })

    this.data = this.navParams.get('data')
    this.edit = this.navParams.get('edit')

    if (this.edit === true) {
      this.customerId = this.navParams.get('data').key
    } else {
      this.customerId = ''
    }
  }

  ionViewDidLoad() {
    this.app.setTitle('Novo Cliente')
    setTimeout(() => {
      this.myInputNome.setFocus();
    },600); //a least 150ms.
  }

    
  profissaoFocus() {
    //alert('aaa');
    setTimeout(() => {
      this.myInputProf.setFocus();
    },600); //a least 150ms.
  }
  

  onCPFKeyPress(event) {
    if(!/^[0-9]|\.|\-$/g.test(event.key)) {
      event.preventDefault()
      return false
    }
  }

  onDateKeyPress(event) {
    if(!/^[0-9]|\/$/g.test(event.key)) {
      event.preventDefault()
      return false
    }
  }

  onSubmit() {
    if(this.customerId) {
      this.customers.patchCustomer(this.customerId, this.form.value)
    } else {
      this.customers.postCustomer(this.form.value)
    }
    
    this.navCtrl.pop()
  }


}
