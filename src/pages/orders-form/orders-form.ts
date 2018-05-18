import { Component, ChangeDetectorRef } from '@angular/core'

import { AlertController, App, NavController, ToastController, LoadingController, NavParams, ModalController } from 'ionic-angular'

import { Contacts, ContactFieldType } from '@ionic-native/contacts'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner'
import { SocialSharing } from '@ionic-native/social-sharing'

import { Customers } from './../../providers/services/customers'
import { Orders } from './../../providers/services/orders'
import { Products } from './../../providers/services/products'

import { UserData } from './../../providers/user-data'

import { CustomersFormPage } from './../customers-form/customers-form'
import { ProductsPage } from './../products/products'
// import { OrdersPage } from './../orders/orders'

@Component({
  selector: 'page-orders-form',
  templateUrl: 'orders-form.html'
})
export class OrdersFormPage {
  monthsArr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  daysArr = ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]

  data: any = {
    celCliente: '',
    nomCliente: '',
    totalItens: '',
    valTotal: 0,
    formaPagamento: '',
    formaVenda: '',
    discount: 0,
    shipping: 0,
    dataHora: '',
    items: []
  }
  queryText: any = ''
  orderId: String = ''
  customer: any = null
  customerName: String = ''
  customerCellphone: String = ''
  paymentMethod: String = ''
  salesMethod: String = ''
  discount: Number = 0
  discountPercent: Number = 0
  discountValue: Number = 0
  shipping: Number = 0
  shippingValue: Number = 0

  subTotalCurrencyFormatted: String = ''
  discountCurrencyFormatted: String = ''
  shippingCurrencyFormatted: String = ''
  totalCurrencyFormatted: String = ''

  customersList: Observable<any[]>
  productsList: Observable<any[]>
  itemsList: any = null
  qty: Number = 0
  total: Number = 0
  subTotal: Number = 0

  barcode: string = ""
  barcodeResult: BarcodeScanResult

  loading: any

  contactFieldtoSearch: ContactFieldType[] = ["phoneNumbers"]

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
    this.app.setTitle('Novo pedido')
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: ''
    })

    this.loading.present()
  }

  getMessage(type: string) {
    let message: string = ""

    switch(type) {
      case 'sms':
        message = "Obrigado por comprar na Davisa."
        message = message + "\n"
        message = message + "Detalhes do seu pedido:" + "\n"
        message = message + "Qtde de itens: " + + this.qty + "\n"
        message = message + "Subtotal: R$ " + this.subTotalCurrencyFormatted + "\n"
        message = message + "Desconto: R$ " + this.discountCurrencyFormatted + " (" + this.discount + "%)\n"
        message = message + "Frete: R$ " + this.shippingCurrencyFormatted + "\n"
        message = message + "Total: R$ " + this.totalCurrencyFormatted + "\n"
        message = message + "Itens: " + "\n"

        const list = this.itemsList.map(item => {
          const description = item.desc + " -> R$ " + item.valVenda + "\n"

          return description
        })

        message = message + list.join("") + "\n"

        message = message + "Foi um prazer te atender :) "

        break

      case 'email':
        message = "Mensagem de e-mail"

        break
    }

    return message
  }

  onSearch() {
    if(this.customerName || this.customerCellphone) {
      this.queryText = []

      if(this.customerName) {
        this.queryText.push(this.customerName)
      }

      if(this.customerCellphone) {
        this.queryText.push('')
        this.queryText.push(this.customerCellphone)
      }

      this.getCustomers()
    }
  }

  onSubmit() {
    this.discount = Number(String(this.discount).replace(',','.').replace('%',''))
    this.discountPercent = Number(Number(this.discount) / 100)
    this.discountValue = Number(Number(this.subTotal) * Number(this.discountPercent))

    this.shipping = Number(String(this.shipping).replace(',','.'))
    this.shippingValue = Number(Number(String(this.shipping).replace(',','.')).toFixed(2))

    this.total = (Number(Number(this.subTotal) - Number(this.discountValue)) + Number(this.shippingValue))
    this.discountCurrencyFormatted = Number(this.discountValue).toFixed(2).replace('.',',')
    this.shippingCurrencyFormatted = Number(this.shipping).toFixed(2).replace('.',',')
    this.totalCurrencyFormatted = this.total.toFixed(2).replace('.',',')

    this.customerCellphone = this.data.celCliente = this.customer.celular;
    this.data.nomCliente = this.customer.nome;
    this.data.formaPagamento = this.paymentMethod;
    this.data.formaVenda = this.salesMethod;
    this.data.desconto = Number(this.discount);
    this.data.frete = Number(this.shipping);
    this.data.totalItens = Number(this.qty);
    this.data.valTotal = Number(this.subTotal);
    this.data.dataHora = this.getDateTime();
    this.data.itens = this.itemsList;

    let message: string = this.getMessage('sms')

    if(confirm('Tem certeza que deseja enviar esse pedido? \n' + message)) {
      this.orders.postOrder(this.data)

      this.itemsList.forEach(item => {
        const patchedProduct = Object.assign({}, item, { qtd_disp: item.qtd_disp - 1 })

        this.products.patchProduct(item.key, patchedProduct)
      })

      this.sendSMS(message, this.customerCellphone)
    }
  }

  setCustomer(customer, repeat) {
    if(!repeat) this.setCustomer(customer, 1)
    else {
      this.customer = customer

      this.chRef.detectChanges()
    }
  }

  getCustomers() {
    this.customersList = this.customers.getCustomers(this.queryText)
  }

  onGetBarcode(): void {
    this.BarcodeScanner.scan().then((barcodeResult: BarcodeScanResult) => {
      this.presentLoading()

      this.barcodeResult = barcodeResult
      this.barcode = this.barcodeResult.text

      this.productsList = this.products.getProducts(this.barcode)
      this.productsList.subscribe(response => response.forEach(product => this.onNewItem(product)))

      this.loading.dismiss()
    }).catch((error: Error) => {
      console.log('barcode error: ', error)
    })
  }

  onNewItem(product) {
    if(product){
      product.qtd_pedido = 1

      if(!this.itemsList) this.itemsList = []

      product.index = this.itemsList.length + 1

      this.itemsList.push(product)
      this.setTotal()
    }
  }

  setTotal() {
    this.qty = this.itemsList.length

    if(this.qty){
      this.subTotal = Number((this.itemsList.map(item => Number(item.valVenda.replace(',','.')))).reduce((total, current)=> total + current))
      this.subTotalCurrencyFormatted = this.subTotal.toFixed(2).replace('.',',')
    }
  }

  onNewCustomer() {
    this.navCtrl.push(CustomersFormPage, { data: { }, edit: false })
  }

  presentModal() {
    let modal = this.modalCtrl.create(ProductsPage, { modal: true })
    modal.onDidDismiss(product => this.onNewItem(product))
    modal.present()
  }

  deleteItem(item) {
    this.itemsList = this.itemsList.filter((subItem, index) => (index != item.index - 1 && subItem))

    this.setTotal()

    if(!this.itemsList.length) this.itemsList = null
  }

  getDateTime() {
    let dateTime = ""

    let date = new Date()
    dateTime = this.daysArr[date.getDate()] + '/' + this.monthsArr[date.getMonth()] + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes()

    return dateTime
  }

  sendSMS(message: string, cellphone: any) {
    this.socialSharing.shareViaSMS(message, cellphone).then(() => {
      alert('SMS enviado com sucesso.')
    }).catch(() => {
      alert('SMS indisponível.')
    })
  }

  sendEmail(message: string, subject: string, email: string) {
    this.socialSharing.canShareViaEmail().then(() => {
      alert('Envio de e-mail pronto.')
    }).catch(() => {
      alert('Envio de e-mail indisponível.')
    })

    this.socialSharing.shareViaEmail(message, subject, [ email ]).then(() => {
      alert('E-mail enviado com sucesso.')
    }).catch(() => {
      alert('E-mail indisponível.')
    })
  }

  onSendSMS() {
    let message: string = this.getMessage('sms')

    alert(message)
    alert(this.customerCellphone)

    this.sendSMS(message, this.customerCellphone)
  }

  onSendEmail() {
    let message: string = this.getMessage('email')
    let subject: string = "Pedido Davisa"
    let email: string = this.userData.ORDER_EMAIL_TO

    this.sendEmail(message, subject, email)
  }

  onSendWhats(message, cellphone) {
    this.socialSharing.shareViaWhatsApp(message, cellphone, '').then(() => {
      alert('Whatsapp enviado com sucesso.')
    }).catch(() => {
      alert('Whatsapp indisponível.')
    })
  }
}
