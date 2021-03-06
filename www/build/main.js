webpackJsonp([0],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_customers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customers_form_customers_form__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomersPage = (function () {
    function CustomersPage(alertCtrl, app, loadingCtrl, toastCtrl, navCtrl, customers) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.customers = customers;
        this.queryText = '';
    }
    CustomersPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: ''
        });
        this.loading.present();
    };
    CustomersPage.prototype.refresh = function (refresher) {
        var _this = this;
        this.getCustomers();
        setTimeout(function () {
            refresher.complete();
            var toast = _this.toastCtrl.create({
                message: 'Lista de clientes atualizada.',
                duration: 1500
            });
            toast.present();
        }, 1000);
    };
    CustomersPage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Clientes');
        this.presentLoading();
        this.getCustomers();
    };
    CustomersPage.prototype.getCustomers = function () {
        var _this = this;
        this.items = this.customers.getCustomers(this.queryText);
        this.items.subscribe(function () {
            _this.loading.dismiss();
        });
    };
    CustomersPage.prototype.setCustomer = function (customer) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__customers_form_customers_form__["a" /* CustomersFormPage */], { data: customer, edit: true });
    };
    CustomersPage.prototype.newCustomer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__customers_form_customers_form__["a" /* CustomersFormPage */], { data: {}, edit: false });
    };
    CustomersPage.prototype.deleteCustomer = function (id, customer) {
        this.customers.deleteCustomer(id, customer);
    };
    CustomersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customers',template:/*ion-inline-start:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\customers\customers.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Clientes</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar color="primary"\n\n                   [(ngModel)]="queryText"\n\n                   (ionInput)="getCustomers()"\n\n                   placeholder="Digite o nome do cliente...">\n\n    </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of items | async">\n\n      <ion-item (click)="setCustomer(item)">\n\n        <ion-label>\n\n          {{ item.nome }}\n\n        </ion-label>\n\n        <ion-icon name="md-arrow-dropright" item-end></ion-icon>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" icon-only (click)="deleteCustomer(item.key, item)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab (click)="newCustomer()"><ion-icon name="md-add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\customers\customers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_customers__["a" /* Customers */]])
    ], CustomersPage);
    return CustomersPage;
}());

//# sourceMappingURL=customers.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_customers__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersFormPage = (function () {
    function CustomersFormPage(alertCtrl, app, loadingCtrl, navCtrl, navParams, formBuilder, customers) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.customers = customers;
        this.data = '';
        this.edit = false;
        this.queryText = '';
        this.customerId = '';
        this.form = this.formBuilder.group({
            nome: [this.navParams.get('data').nome, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: [this.navParams.get('data').email],
            celular: [this.navParams.get('data').celular, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Sexo: [this.navParams.get('data').Sexo],
            prof: [this.navParams.get('data').prof],
            estcivil: [this.navParams.get('data').estcivil],
            aniver: [this.navParams.get('data').aniver],
            CPF: [this.navParams.get('data').CPF],
            RG: [this.navParams.get('data').RG],
            endereco: [this.navParams.get('data').endereco],
            complemento: [this.navParams.get('data').complemento],
            indicacao: [this.navParams.get('data').indicacao]
        });
        this.data = this.navParams.get('data');
        this.edit = this.navParams.get('edit');
        if (this.edit === true) {
            this.customerId = this.navParams.get('data').key;
        }
        else {
            this.customerId = '';
        }
    }
    CustomersFormPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.app.setTitle('Novo Cliente');
        setTimeout(function () {
            _this.myInputNome.setFocus();
        }, 600); //a least 150ms.
    };
    CustomersFormPage.prototype.profissaoFocus = function () {
        var _this = this;
        //alert('aaa');
        setTimeout(function () {
            _this.myInputProf.setFocus();
        }, 600); //a least 150ms.
    };
    CustomersFormPage.prototype.onCPFKeyPress = function (event) {
        if (!/^[0-9]|\.|\-$/g.test(event.key)) {
            event.preventDefault();
            return false;
        }
    };
    CustomersFormPage.prototype.onDateKeyPress = function (event) {
        if (!/^[0-9]|\/$/g.test(event.key)) {
            event.preventDefault();
            return false;
        }
    };
    CustomersFormPage.prototype.onSubmit = function () {
        if (this.customerId) {
            this.customers.patchCustomer(this.customerId, this.form.value);
        }
        else {
            this.customers.postCustomer(this.form.value);
        }
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('inputNome'),
        __metadata("design:type", Object)
    ], CustomersFormPage.prototype, "myInputNome", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('inputProf'),
        __metadata("design:type", Object)
    ], CustomersFormPage.prototype, "myInputProf", void 0);
    CustomersFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customers-form',template:/*ion-inline-start:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\customers-form\customers-form.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n\n      <ion-icon color="primary" name="md-menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Detalhes do Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form [formGroup]="form" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-person" item-left></ion-icon>\n\n      <ion-label color="primary" floating>Nome</ion-label>\n\n      <ion-input #inputNome type="text" formControlName="nome" (keyup.enter)="inputCel.setFocus()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-phone-portrait" item-left></ion-icon>\n\n      <ion-label color="primary" floating>Celular</ion-label>\n\n      <ion-input #inputCel type="tel" formControlName="celular" (keyup.enter)="inputEmail.setFocus()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-at" item-left></ion-icon>\n\n      <ion-label color="primary" floating>E-mail</ion-label>\n\n      <ion-input #inputEmail type="text" formControlName="email" (keyup.enter)="selectSexo.open()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-body" item-left></ion-icon>\n\n      <ion-label color="primary" floating>Sexo</ion-label>\n\n      <ion-select #selectSexo interface="action-sheet" formControlName="Sexo" (ionChange)="profissaoFocus()">\n\n        <ion-option value="F">Feminino</ion-option>\n\n        <ion-option value="M">Masculino</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-construct" item-left></ion-icon>\n\n      <ion-label color="primary" floating>Profissão</ion-label>\n\n      <ion-input #inputProf type="text" formControlName="prof" (keyup.enter)="inputEstCiv.setFocus()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-contacts" item-left></ion-icon>\n\n      <ion-label color="primary" floating>Estado Civil</ion-label>\n\n      <ion-input #inputEstCiv type="text" formControlName="estcivil" (keyup.enter)="inputAniver.setFocus()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-calendar" item-left></ion-icon>\n\n      <ion-label color="primary" floating>Aniversário</ion-label>\n\n      <ion-input #inputAniver type="text" (keypress)="onDateKeyPress($event)" [brmasker]="{ mask: \'00/00/0000\', len: 10 }" formControlName="aniver" (keyup.enter)="inputCPF.setFocus()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-card" item-left></ion-icon>\n\n      <ion-label color="primary" floating>CPF</ion-label>\n\n      <ion-input #inputCPF type="text" (keypress)="onCPFKeyPress($event)" [brmasker]="{ mask: \'000.000.000-00\', len:14 }" formControlName="CPF" (keyup.enter)="inputRG.setFocus()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-finger-print" item-left></ion-icon>\n\n      <ion-label color="primary" floating>RG</ion-label>\n\n      <ion-input #inputRG type="text" formControlName="RG" maxlength="20" (keyup.enter)="inputEnd.setFocus()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-home" item-left></ion-icon>\n\n      <ion-label color="primary" floating>Endereço</ion-label>\n\n      <ion-input #inputEnd type="text" formControlName="endereco" (keyup.enter)="inputComp.setFocus()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-infinite" item-left></ion-icon>\n\n      <ion-label color="primary" floating>Complemento</ion-label>\n\n      <ion-input #inputComp type="text" formControlName="complemento" (keyup.enter)="selectInd.open()"></ion-input>\n\n    </ion-item>\n\n\n\n    <!--\n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-information-circle" item-left></ion-icon>\n\n      <ion-label color="primary" floating>Indicação</ion-label>\n\n      <ion-input type="text" formControlName="indicacao"></ion-input>\n\n    </ion-item>\n\n    -->\n\n    \n\n    <ion-item>\n\n      <ion-icon color="primary" name="md-information-circle" item-left></ion-icon>\n\n      <ion-label color="primary" floating>Indicação</ion-label>\n\n      <ion-select #selectInd interface="action-sheet" formControlName="indicacao">\n\n        <ion-option value="Bazar">Bazar</ion-option>\n\n        <ion-option value="Rede Social">Rede Social</ion-option>\n\n        <ion-option value="Whatsapp">Whatsapp</ion-option>\n\n        <ion-option value="Outros">Outros</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab (click)="onSubmit()" [disabled]="form.invalid"><ion-icon name="md-checkmark"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\customers-form\customers-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_customers__["a" /* Customers */]])
    ], CustomersFormPage);
    return CustomersFormPage;
}());

//# sourceMappingURL=customers-form.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_orders__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orders_form_orders_form__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_view_orders_view__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrdersPage = (function () {
    function OrdersPage(alertCtrl, app, loadingCtrl, navCtrl, navParams, formBuilder, toastCtrl, orders) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.orders = orders;
        this.data = '';
        this.edit = false;
        this.queryText = '';
        this.customerId = '';
    }
    OrdersPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: ''
        });
        this.loading.present();
    };
    OrdersPage.prototype.refresh = function (refresher) {
        var _this = this;
        this.getOrders();
        setTimeout(function () {
            refresher.complete();
            var toast = _this.toastCtrl.create({
                message: 'Lista de pedidos atualizadas.',
                duration: 1500
            });
            toast.present();
        }, 1000);
    };
    OrdersPage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Pedidos');
        this.presentLoading();
        this.getOrders();
    };
    OrdersPage.prototype.getOrders = function () {
        var _this = this;
        this.ordersList = this.orders.getOrders(this.queryText);
        this.ordersList.subscribe(function () {
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
        });
    };
    OrdersPage.prototype.setOrder = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__orders_view_orders_view__["a" /* OrdersViewPage */], { data: order, view: true });
    };
    OrdersPage.prototype.newOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__orders_form_orders_form__["a" /* OrdersFormPage */]);
    };
    OrdersPage.prototype.deleteOrder = function (order) {
        this.orders.deleteOrder(order);
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\orders\orders.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Pedidos</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar color="primary"\n\n                   [(ngModel)]="queryText"\n\n                   (ionInput)="getOrders()"\n\n                   placeholder="Digite o nome do cliente...">\n\n    </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher *ngIf="queryText.length" (ionRefresh)="refresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list *ngIf="queryText.length">\n\n    <ion-item-sliding *ngFor="let item of ordersList | async">\n\n      <ion-item detail-push (click)="setOrder(item)">\n\n        <ion-label>\n\n          <strong>#{{ item.numPedido }}</strong> {{ item.date }} - {{ item.nomCliente }}\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" icon-only (click)="deleteOrder(item)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab (click)="newOrder()"><ion-icon name="md-add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\orders\orders.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_orders__["a" /* Orders */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserData = (function () {
    function UserData() {
        this._favorites = [];
        this.ORDER_EMAIL_TO = 'izac@izaccavalheiro.com';
    }
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_customers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_orders__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_services_products__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_data__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customers_form_customers_form__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// import { OrdersPage } from './../orders/orders'

var OrdersFormPage = (function () {
    function OrdersFormPage(viewCtrl, alertCtrl, app, loadingCtrl, navCtrl, navParams, toastCtrl, modalCtrl, customers, orders, products, userData, chRef, BarcodeScanner, socialSharing, contacts, datepipe) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.customers = customers;
        this.orders = orders;
        this.products = products;
        this.userData = userData;
        this.chRef = chRef;
        this.BarcodeScanner = BarcodeScanner;
        this.socialSharing = socialSharing;
        this.contacts = contacts;
        this.datepipe = datepipe;
        this.monthsArr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        this.daysArr = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
        this.data = {
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
        };
        this.queryText = '';
        this.orderId = '';
        this.customer = null;
        this.customerName = '';
        this.customerCellphone = '';
        this.orderDate = new Date().toISOString();
        this.paymentMethod = '';
        this.salesMethod = '';
        this.discount = 0;
        this.discountPercent = 0;
        this.discountValue = 0;
        this.shipping = 0;
        this.shippingValue = 0;
        this.subTotalCurrencyFormatted = '';
        this.discountCurrencyFormatted = '';
        this.shippingCurrencyFormatted = '';
        this.totalCurrencyFormatted = '';
        this.itemsList = null;
        this.confirm = false;
        this.qty = 0;
        this.total = 0;
        this.subTotal = 0;
        this.barcode = "";
        this.contactFieldtoSearch = ["phoneNumbers"];
        this.confirm = false;
    }
    OrdersFormPage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Novo pedido');
    };
    OrdersFormPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: ''
        });
        this.loading.present();
    };
    OrdersFormPage.prototype.getMessage = function (type) {
        var message = "";
        var list = [];
        switch (type) {
            case 'sms':
                message = "Obrigado por comprar na Davisa.";
                message = message + "\n";
                message = message + "Detalhes do seu pedido:" + "\n";
                message = message + "Qtde de itens: " + +this.qty + "\n";
                message = message + "Subtotal: R$ " + this.subTotalCurrencyFormatted + "\n";
                message = message + "Desconto: R$ " + this.discountCurrencyFormatted + " (" + this.discount + "%)\n";
                message = message + "Frete: R$ " + this.shippingCurrencyFormatted + "\n";
                message = message + "Total: R$ " + this.totalCurrencyFormatted + "\n";
                message = message + "Itens: " + "\n";
                list = this.itemsList.map(function (item) {
                    var description = item.desc + " -> R$ " + item.valVenda + "\n";
                    return description;
                });
                message = message + list.join("") + "\n";
                message = message + "Foi um prazer te atender :) ";
                break;
            case 'email':
                message = "Mensagem de e-mail";
                message = message + "\n";
                message = "Obrigado por comprar na Davisa.";
                message = message + "\n";
                message = message + "Detalhes do seu pedido:" + "\n";
                message = message + "Qtde de itens: " + +this.qty + "\n";
                message = message + "Subtotal: R$ " + this.subTotalCurrencyFormatted + "\n";
                message = message + "Desconto: R$ " + this.discountCurrencyFormatted + " (" + this.discount + "%)\n";
                message = message + "Frete: R$ " + this.shippingCurrencyFormatted + "\n";
                message = message + "Total: R$ " + this.totalCurrencyFormatted + "\n";
                message = message + "Itens: " + "\n";
                list = this.itemsList.map(function (item) {
                    var description = item.desc + " -> R$ " + item.valVenda + "\n";
                    return description;
                });
                message = message + list.join("") + "\n";
                message = message + "Foi um prazer te atender :) ";
                break;
        }
        return message;
    };
    OrdersFormPage.prototype.onSearch = function () {
        if (this.customerName || this.customerCellphone) {
            this.queryText = [];
            if (this.customerName) {
                this.queryText.push(this.customerName);
            }
            if (this.customerCellphone) {
                this.queryText.push('');
                this.queryText.push(this.customerCellphone);
            }
            this.getCustomers();
        }
    };
    OrdersFormPage.prototype.onSubmit = function () {
        var _this = this;
        this.discount = Number(String(this.discount).replace(',', '.').replace('%', ''));
        this.discountPercent = Number(Number(this.discount) / 100);
        this.discountValue = Number(Number(this.subTotal) * Number(this.discountPercent));
        this.shipping = Number(String(this.shipping).replace(',', '.'));
        this.shippingValue = Number(Number(String(this.shipping).replace(',', '.')).toFixed(2));
        this.total = (Number(Number(this.subTotal) - Number(this.discountValue)) + Number(this.shippingValue));
        this.discountCurrencyFormatted = Number(this.discountValue).toFixed(2).replace('.', ',');
        this.shippingCurrencyFormatted = Number(this.shipping).toFixed(2).replace('.', ',');
        this.totalCurrencyFormatted = this.total.toFixed(2).replace('.', ',');
        this.customerCellphone = this.data.celCliente = this.customer.celular;
        this.data.nomCliente = this.customer.nome;
        this.data.formaPagamento = this.paymentMethod;
        this.data.formaVenda = this.salesMethod;
        this.data.desconto = Number(this.discount);
        this.data.frete = Number(this.shipping);
        this.data.totalItens = Number(this.qty);
        this.data.valTotal = Number(this.subTotal);
        //this.data.dataHora = this.getDateTime();
        this.data.dataHora = this.datepipe.transform(this.orderDate, 'dd/MM/yyyy');
        this.data.itens = this.itemsList;
        var message = this.getMessage('sms');
        if (confirm('Deseja confirmar esse pedido? \n' + message)) {
            this.orders.postOrder(this.data);
            this.itemsList.forEach(function (item) {
                var patchedProduct = Object.assign({}, item, { qtd_disp: item.qtd_disp - 1 });
                if (item.key) {
                    _this.products.patchProduct(item.key, patchedProduct);
                }
            });
            this.confirm = true;
            this.viewCtrl.dismiss();
        }
    };
    OrdersFormPage.prototype.setCustomer = function (customer, repeat) {
        if (!repeat)
            this.setCustomer(customer, 1);
        else {
            this.customer = customer;
            this.chRef.detectChanges();
        }
    };
    OrdersFormPage.prototype.getCustomers = function () {
        this.customersList = this.customers.getCustomers(this.queryText);
    };
    OrdersFormPage.prototype.onGetBarcode = function () {
        var _this = this;
        this.BarcodeScanner.scan().then(function (barcodeResult) {
            _this.presentLoading();
            _this.barcodeResult = barcodeResult;
            _this.barcode = _this.barcodeResult.text;
            _this.productsList = _this.products.getProducts(_this.barcode);
            _this.productsList.subscribe(function (response) { return response.forEach(function (product) { return _this.onNewItem(product); }); });
            _this.loading.dismiss();
        }).catch(function (error) {
            console.log('barcode error: ', error);
        });
    };
    OrdersFormPage.prototype.onNewItem = function (product) {
        if (product) {
            product.qtd_pedido = 1;
            if (!this.itemsList)
                this.itemsList = [];
            product.index = this.itemsList.length + 1;
            this.itemsList.push(product);
            this.setTotal();
        }
    };
    OrdersFormPage.prototype.setTotal = function () {
        this.qty = this.itemsList.length;
        if (this.qty) {
            this.subTotal = Number((this.itemsList.map(function (item) { return Number(item.valVenda.replace(',', '.')); })).reduce(function (total, current) { return total + current; }));
            this.subTotalCurrencyFormatted = this.subTotal.toFixed(2).replace('.', ',');
        }
    };
    OrdersFormPage.prototype.onNewCustomer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__customers_form_customers_form__["a" /* CustomersFormPage */], { data: {}, edit: false });
    };
    OrdersFormPage.prototype.presentModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */], { modal: true });
        modal.onDidDismiss(function (product) { return _this.onNewItem(product); });
        modal.present();
    };
    OrdersFormPage.prototype.deleteItem = function (item) {
        this.itemsList = this.itemsList.filter(function (subItem, index) { return (index != item.index - 1 && subItem); });
        this.setTotal();
        if (!this.itemsList.length)
            this.itemsList = null;
    };
    OrdersFormPage.prototype.getDateTime = function () {
        var dateTime = "";
        var date = new Date();
        dateTime = this.daysArr[date.getDate()] + '/' + this.monthsArr[date.getMonth()] + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes();
        return dateTime;
    };
    OrdersFormPage.prototype.sendSMS = function (message, cellphone) {
        this.socialSharing.shareViaSMS(message, cellphone).then(function () {
            alert('SMS enviado com sucesso.');
        }).catch(function () {
            alert('SMS indisponível.');
        });
    };
    OrdersFormPage.prototype.sendEmail = function (message, subject, email) {
        this.socialSharing.canShareViaEmail().then(function () {
            alert('Envio de e-mail pronto.');
        }).catch(function () {
            alert('Envio de e-mail indisponível.');
        });
        this.socialSharing.shareViaEmail(message, subject, [email]).then(function () {
            alert('E-mail enviado com sucesso.');
        }).catch(function () {
            alert('E-mail indisponível.');
        });
    };
    OrdersFormPage.prototype.onSendSMS = function () {
        var message = this.getMessage('sms');
        alert(message);
        alert(this.customerCellphone);
        this.sendSMS(message, this.customerCellphone);
    };
    OrdersFormPage.prototype.onSendEmail = function () {
        var message = this.getMessage('email');
        var subject = "Pedido Davisa";
        var email = this.userData.ORDER_EMAIL_TO;
        this.sendEmail(message, subject, email);
    };
    OrdersFormPage.prototype.onSendWhats = function (message, cellphone) {
        this.socialSharing.shareViaWhatsApp(message, cellphone, '').then(function () {
            alert('Whatsapp enviado com sucesso.');
        }).catch(function () {
            alert('Whatsapp indisponível.');
        });
    };
    OrdersFormPage.prototype.onDateKeyPress = function (event) {
        if (!/^[0-9]|\/$/g.test(event.key)) {
            event.preventDefault();
            return false;
        }
    };
    OrdersFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-orders-form',template:/*ion-inline-start:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\orders-form\orders-form.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n\n      <ion-icon color="primary" name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Detalhes do pedido</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div *ngIf="!customer">\n\n    <ion-list>\n\n      <ion-list-header>Buscar cliente</ion-list-header>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Data do pedido:</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="orderDate"></ion-datetime>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label color="primary" floating>Nome:</ion-label>\n\n        <ion-input color="primary" [(ngModel)]="customerName" (keyup)="onSearch()" (change)="onSearch()" (blur)="onSearch()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Celular:</ion-label>\n\n        <ion-input color="primary" [(ngModel)]="customerCellphone" (keyup)="onSearch()" (change)="onSearch()" (blur)="onSearch()"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-list-header *ngIf="customersList | async">Selecionar cliente</ion-list-header>\n\n      <ion-item *ngFor="let item of customersList | async" (click)="setCustomer(item)" detail-push>\n\n        {{ item.nome }}\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-fab bottom right #fab>\n\n      <button ion-fab (click)="onNewCustomer()"><ion-icon name="md-add"></ion-icon></button>\n\n    </ion-fab>\n\n  </div>\n\n\n\n  <div *ngIf="customer">\n\n    <ion-list>\n\n      <ion-list-header>Cliente escolhido</ion-list-header>\n\n      <ion-item-group>\n\n        <ion-item>Data do pedido: {{ orderDate | date:\'dd/MM/yyyy\' }}</ion-item>\n\n        <ion-item>Nome: {{ customer.nome }}</ion-item>\n\n        <ion-item>Celular: {{ customer.celular }}</ion-item>\n\n      </ion-item-group>\n\n\n\n      <ion-list-header>Adicionar itens</ion-list-header>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-fab color="primary" (click)="presentModal()">\n\n            <ion-icon name="md-search"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-fab color="primary" (click)="onGetBarcode()">\n\n            <ion-icon name="md-qr-scanner"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-list-header *ngIf="itemsList">Itens adicionados</ion-list-header>\n\n      <ion-item-sliding *ngFor="let item of itemsList">\n\n        <ion-item>\n\n          <h3>{{item.desc}}</h3>\n\n\n\n          <div class="text-align-left">\n\n            <ion-row>\n\n              <ion-col col-5>Tam: {{ item.tamanho }}</ion-col>\n\n              <ion-col col-3>Cor: {{ item.cor }}</ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col col-5>Marca: {{ item.marca }}</ion-col>\n\n              <ion-col col-3>Preço: {{ item.valVenda }}</ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col col-5>Disp.: {{ item.qtd_disp }}</ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-item-options side="right">\n\n          <button ion-button color="danger" icon-only (click)="deleteItem(item)">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n\n\n      <ion-row class="info" *ngIf="itemsList">\n\n        <ion-col><span>Qtde.: {{ qty }}</span></ion-col>\n\n        <ion-col><span>Subtotal: R$ {{ subTotalCurrencyFormatted }}</span></ion-col>\n\n      </ion-row>\n\n\n\n      <ion-list-header *ngIf="itemsList">Informações de pagamento</ion-list-header>\n\n      <div *ngIf="itemsList">\n\n        <ion-item>\n\n          <ion-icon color="primary" name="md-card" item-left></ion-icon>\n\n          <ion-label color="primary" floating>Forma de pagamento</ion-label>\n\n          <ion-select interface="action-sheet" [(ngModel)]="paymentMethod">\n\n            <ion-option value="Dinheiro">Dinheiro</ion-option>\n\n            <ion-option value="Debito">Débito</ion-option>\n\n            <ion-option value="Credito">Crédito</ion-option>\n\n            <ion-option value="Link PagSeguro">Link PagSeguro</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon color="primary" name="md-contacts" item-left></ion-icon>\n\n          <ion-label color="primary" floating>Forma de venda</ion-label>\n\n          <ion-select interface="action-sheet" [(ngModel)]="salesMethod">\n\n            <ion-option value="Facebook">Facebook</ion-option>\n\n            <ion-option value="Instagram">Instagram</ion-option>\n\n            <ion-option value="Bazar">Bazar</ion-option>\n\n            <ion-option value="Indicação">Indicação</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon color="primary" name="md-pricetags" item-left></ion-icon>\n\n          <ion-label color="primary" floating>Desconto</ion-label>\n\n          <ion-input type="text" [brmasker]="{percent: true}" [(ngModel)]="discount"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon color="primary" name="md-cube" item-left></ion-icon>\n\n          <ion-label color="primary" floating>Frete</ion-label>\n\n          <ion-input type="text" [(ngModel)]="shipping" [brmasker]="{money: true}"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n\n\n      <button *ngIf="itemsList" ion-button block type="button" color="primary" (click)="onSubmit()">Confirmar</button>\n\n\n\n      <ion-row *ngIf="itemsList && confirm">\n\n        <ion-col>\n\n          <button block ion-fab color="dark" (click)="onSendEmail()">\n\n            <ion-icon name="md-mail"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button block ion-fab color="primary" (click)="onSendSMS()">\n\n            <ion-icon name="ios-send"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button block ion-fab color="secondary" (click)="onSendWhats()">\n\n            <ion-icon name="logo-whatsapp"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\orders-form\orders-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_services_customers__["a" /* Customers */],
            __WEBPACK_IMPORTED_MODULE_7__providers_services_orders__["a" /* Orders */],
            __WEBPACK_IMPORTED_MODULE_8__providers_services_products__["a" /* Products */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */]])
    ], OrdersFormPage);
    return OrdersFormPage;
}());

//# sourceMappingURL=orders-form.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_products__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsFormPage = (function () {
    function ProductsFormPage(alertCtrl, app, loadingCtrl, navCtrl, navParams, formBuilder, products, barcodeScanner) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.products = products;
        this.barcodeScanner = barcodeScanner;
        this.data = '';
        this.edit = false;
        this.queryText = '';
        this.productId = '';
        this.barcode = "";
        this.form = this.formBuilder.group({
            codBarras: [this.navParams.get('data').codBarras, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            marca: [this.navParams.get('data').marca],
            codigo: [this.navParams.get('data').codigo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
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
        }
        else {
            this.productId = '';
        }
    }
    ProductsFormPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.app.setTitle('Novo Produto');
        setTimeout(function () {
            _this.myInputBarcode.setFocus();
        }, 600); //a least 150ms.
    };
    ProductsFormPage.prototype.corFocus = function () {
        var _this = this;
        //alert('aaa');
        setTimeout(function () {
            _this.myInputCor.setFocus();
        }, 600); //a least 150ms.
    };
    ProductsFormPage.prototype.onQtyKeyPress = function (event) {
        if (!/^[0-9]$/g.test(event.key)) {
            event.preventDefault();
            return false;
        }
    };
    ProductsFormPage.prototype.onSubmit = function () {
        //PENDENTE INCLUIR VALIDAÇÃO SE PRODUTO JA EXISTE
        //if (!this.products.searchProduct(this.form.value.codBarras)) {
        if (this.productId && this.edit === true) {
            this.products.patchProduct(this.productId, this.form.value);
        }
        else {
            this.products.postProduct(this.form.value);
        }
        this.navCtrl.pop();
        //} else {
        //  alert('Um produto com o código ' + this.form.value.codBarras + ' já está cadastrado.');
        //}
    };
    ProductsFormPage.prototype.onScan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeResult) {
            _this.barcodeResult = barcodeResult;
            _this.barcode = _this.barcodeResult.text;
            _this.form.patchValue({ 'codBarras': _this.barcode });
        }).catch(function (error) {
            console.log('barcode error: ', error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('inputBarcode'),
        __metadata("design:type", Object)
    ], ProductsFormPage.prototype, "myInputBarcode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('inputCor'),
        __metadata("design:type", Object)
    ], ProductsFormPage.prototype, "myInputCor", void 0);
    ProductsFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products-form',template:/*ion-inline-start:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\products-form\products-form.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>Detalhes do Produto</ion-title>\n\n\n\n    <ion-buttons right>\n\n      <ion-fab right middle>\n\n        <button ion-fab mini color="primary" (click)="onScan()">\n\n          <ion-icon name="md-qr-scanner"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form [formGroup]="form" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n    <ion-grid>\n\n      <ion-item>\n\n        <ion-icon color="primary" name="md-barcode" item-left></ion-icon>\n\n        <ion-label color="primary" floating>Código de barras</ion-label>\n\n        <ion-input #inputBarcode type="text" formControlName="codBarras" (keyup.enter)="inputProd.setFocus()"></ion-input>  \n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon color="primary" name="md-shirt" item-left></ion-icon>\n\n        <ion-label color="primary" floating>Produto</ion-label>\n\n        <ion-input #inputProd type="text" formControlName="desc" (keyup.enter)="inputCod.setFocus()"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon color="primary" name="md-information-circle" item-left></ion-icon>\n\n        <ion-label color="primary" floating>Código</ion-label>\n\n        <ion-input #inputCod type="text" formControlName="codigo" (keyup.enter)="selectMarca.open()"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon color="primary" name="md-pricetag" item-left></ion-icon>\n\n        <ion-label color="primary" floating>Marca</ion-label>\n\n        <ion-select #selectMarca interface="action-sheet" formControlName="marca" (ionChange)="corFocus()">\n\n          <ion-option value="DeMillus">DeMillus</ion-option>\n\n          <ion-option value="Valisere">Valisére</ion-option>\n\n          <ion-option value="ValFrance">ValFrance</ion-option>\n\n          <ion-option value="Toque Intimo">Toque Íntimo</ion-option>\n\n          <ion-option value="Liz">Liz</ion-option>\n\n          <ion-option value="Duloren">Duloren</ion-option>\n\n          <ion-option value="Dilady">Dilady</ion-option>\n\n          <ion-option value="Fidelitá">Fidelitá</ion-option>\n\n          <ion-option value="Marcyn">Marcyn</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-icon color="primary" name="md-color-palette" item-left></ion-icon>\n\n            <ion-label color="primary" floating>Cor</ion-label>\n\n            <ion-input #inputCor type="text" formControlName="cor" (keyup.enter)="inputTamanho.setFocus()"></ion-input>  \n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-icon color="primary" name="md-expand" item-left></ion-icon>\n\n            <ion-label color="primary" floating>Tamanho</ion-label>\n\n            <ion-input #inputTamanho type="text" formControlName="tamanho" (keyup.enter)="inputValComp.setFocus()"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-item>\n\n        <ion-icon color="primary" name="md-calculator" item-left></ion-icon>\n\n        <ion-label color="primary" floating>Valor compra</ion-label>\n\n        <ion-input #inputValComp type="text" formControlName="valCompra" [brmasker]="{money: true}" (keyup.enter)="inputValVenda.setFocus()"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon color="primary" name="md-calculator" item-left></ion-icon>\n\n        <ion-label color="primary" floating>Valor venda</ion-label>\n\n        <ion-input #inputValVenda type="text" formControlName="valVenda" [brmasker]="{money: true}" (keyup.enter)="inputQtd.setFocus()"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon color="primary" name="md-archive" item-left></ion-icon>\n\n        <ion-label color="primary" floating>Quantidade</ion-label>\n\n        <ion-input #inputQtd type="number" formControlName="qtd_disp" (keypress)="onQtyKeyPress($event)"></ion-input>\n\n      </ion-item>\n\n    </ion-grid>\n\n  </form>\n\n\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab (click)="onSubmit()" [disabled]="form.invalid"><ion-icon name="md-checkmark"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\products-form\products-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_products__["a" /* Products */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ProductsFormPage);
    return ProductsFormPage;
}());

//# sourceMappingURL=products-form.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_orders__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersViewPage = (function () {
    function OrdersViewPage(alertCtrl, app, loadingCtrl, navCtrl, navParams, formBuilder, toastCtrl, orders) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.orders = orders;
        this.view = false;
        this.queryText = '';
        this.orderId = '';
        this.orderCustomerName = '';
        this.orderDate = '';
        this.orderCustomerCellphone = '';
        this.orderPaymentMethod = '';
        this.orderSalesMethod = '';
        this.orderDiscount = 0;
        this.orderShipping = 0;
        this.orderSubTotal = 0;
        this.orderDiscountValue = '';
        this.orderDiscountPercent = 0;
        this.orderDiscountPercentValue = 0;
        this.orderTotalCosts = '';
        this.orderSubTotalCurrencyFormatted = '';
        this.orderDiscountCurrencyFormatted = '';
        this.orderShippingCurrencyFormatted = '';
        this.orderTotalCurrencyFormatted = '';
        this.view = this.navParams.get('view');
        if (this.view === true) {
            this.orderId = 123; //this.navParams.get('data').;
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
            this.orderProductsList = Object.keys(this.navParams.get('data').itens).map(function (key) {
                _this.navParams.get('data').itens[key].valVenda = (_this.navParams.get('data').itens[key]).valVenda.replace('.', ',');
                var item = [(key), _this.navParams.get('data').itens[key]];
                return item;
            });
        }
        else {
            this.orderId = '';
        }
    }
    OrdersViewPage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Visualizar pedido');
    };
    OrdersViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-orders-view',template:/*ion-inline-start:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\orders-view\orders-view.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Pedido #{{ orderId }}</ion-list-header>\n\n    <ion-list-header>Data / Hora: {{ orderDate }}</ion-list-header>\n\n    <ion-item-group>\n\n      <ion-item>Cliente: {{ orderCustomerName }}</ion-item>\n\n      <ion-item>Celular: {{ orderCustomerCellphone }}</ion-item>\n\n      <ion-item>Forma de Pagamento: {{ orderPaymentMethod }}</ion-item>\n\n      <ion-item>Forma de Venda: {{ orderSalesMethod }}</ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n  \n\n  <ion-list>\n\n    <ion-list-header>Lista de produtos</ion-list-header>\n\n    <ion-item-sliding *ngFor="let item of orderProductsList">\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col justify-content-start>\n\n            <strong>{{ item[1].desc }}</strong>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n        <ion-row>\n\n          <ion-col justify-content-start col-5><strong>Tam:</strong> {{ item[1].tamanho }}</ion-col>\n\n          <ion-col justify-content-end col-3><strong>Cor:</strong> {{ item[1].cor }}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col justify-content-end col-5><strong>Preço:</strong> R$ {{ item[1].valVenda }}</ion-col>\n\n          <ion-col justify-content-start col-3><strong>Marca:</strong> {{ item[1].marca }}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col justify-content-start col-5><strong>Qtde.:</strong> {{ item[1].qtd_pedido }}</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header>Subtotal</ion-list-header>\n\n    <ion-item-group>\n\n      <ion-item>R$ {{ orderSubTotalCurrencyFormatted }}</ion-item>\n\n    </ion-item-group>\n\n    <ion-list-header>Desconto</ion-list-header>\n\n    <ion-item-group>\n\n      <ion-item>R$ {{ orderDiscountCurrencyFormatted }} <em>({{ orderDiscount }}%)</em></ion-item>\n\n    </ion-item-group>\n\n    <ion-list-header>Frete</ion-list-header>\n\n    <ion-item-group>\n\n      <ion-item>R$ {{ orderShippingCurrencyFormatted }}</ion-item>\n\n    </ion-item-group>\n\n    <ion-list-header>Total</ion-list-header>\n\n    <ion-item-group>\n\n      <ion-item>R$ {{ orderTotalCurrencyFormatted }}</ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\orders-view\orders-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_orders__["a" /* Orders */]])
    ], OrdersViewPage);
    return OrdersViewPage;
}());

//# sourceMappingURL=orders-view.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customers_customers__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_orders__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__customers_customers__["a" /* CustomersPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__orders_orders__["a" /* OrdersPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\tabs-page\tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n\n  <ion-tab [root]="tab1Root" tabTitle="Clientes" tabIcon="people" tabUrlPath="customers"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Pedidos" tabIcon="basket" tabUrlPath="orders"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Produtos" tabIcon="cube" tabUrlPath="products"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\tabs-page\tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_contacts__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_brmasker_ionic_3__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_customers_customers__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_customers_form_customers_form__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_orders_orders__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_orders_form_orders_form__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_orders_view_orders_view__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_products_products__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_products_form_products_form__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tabs_page_tabs_page__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_user_data__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_services_customers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_services_orders__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_services_products__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var firebaseConfig = {
    apiKey: "AIzaSyBJfyA0HoyDRGspLSWQ8g8oCfJYYg2l6XQ",
    authDomain: "davisa-modaintima.firebaseapp.com",
    databaseURL: "https://davisa-modaintima.firebaseio.com",
    projectId: "davisa-modaintima",
    storageBucket: "davisa-modaintima.appspot.com",
    messagingSenderId: "410435296849"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* SalesApp */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_customers_customers__["a" /* CustomersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_customers_form_customers_form__["a" /* CustomersFormPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_orders_form_orders_form__["a" /* OrdersFormPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_orders_view_orders_view__["a" /* OrdersViewPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_products_form_products_form__["a" /* ProductsFormPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* SalesApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_customers_customers__["a" /* CustomersPage */], name: 'Customers', segment: 'customers' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_customers_form_customers_form__["a" /* CustomersFormPage */], name: 'CustomersForm', segment: 'customers-new' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_orders_orders__["a" /* OrdersPage */], name: 'Orders', segment: 'orders' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_orders_form_orders_form__["a" /* OrdersFormPage */], name: 'OrdersForm', segment: 'orders-new' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_orders_view_orders_view__["a" /* OrdersViewPage */], name: 'OrdersView', segment: 'orders-view' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_products_products__["a" /* ProductsPage */], name: 'Products', segment: 'products' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_products_form_products_form__["a" /* ProductsFormPage */], name: 'ProductsForm', segment: 'products-new' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* SalesApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_customers_customers__["a" /* CustomersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_customers_form_customers_form__["a" /* CustomersFormPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_orders_view_orders_view__["a" /* OrdersViewPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_orders_form_orders_form__["a" /* OrdersFormPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_products_form_products_form__["a" /* ProductsFormPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_page_tabs_page__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__providers_services_customers__["a" /* Customers */],
                __WEBPACK_IMPORTED_MODULE_27__providers_services_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_28__providers_services_products__["a" /* Products */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_25__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_29__angular_common__["d" /* DatePipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_customers_customers__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_products_products__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_data__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_services_customers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_services_orders__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_services_products__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SalesApp = (function () {
    function SalesApp(events, userData, menu, platform, storage, splashScreen, datePicker, customers, orders, products) {
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.datePicker = datePicker;
        this.customers = customers;
        this.orders = orders;
        this.products = products;
        this.appPages = [
            { title: 'Clientes', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_5__pages_customers_customers__["a" /* CustomersPage */], index: 0, icon: 'people' },
            { title: 'Pedidos', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders__["a" /* OrdersPage */], index: 1, icon: 'basket' },
            { title: 'Produtos', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_7__pages_products_products__["a" /* ProductsPage */], index: 2, icon: 'cube' }
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */];
        this.platformReady();
    }
    SalesApp.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
    };
    SalesApp.prototype.platformReady = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    SalesApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], SalesApp.prototype, "nav", void 0);
    SalesApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\app\app.template.html"*/'<ion-split-pane when="(min-width: 2048px)">\n\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Davisa</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n\n'/*ion-inline-end:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_10__providers_services_customers__["a" /* Customers */],
            __WEBPACK_IMPORTED_MODULE_11__providers_services_orders__["a" /* Orders */],
            __WEBPACK_IMPORTED_MODULE_12__providers_services_products__["a" /* Products */]])
    ], SalesApp);
    return SalesApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Customers = (function () {
    function Customers(firebase) {
        this.firebase = firebase;
        this.list = '/clientes/';
    }
    Customers.prototype.getCustomers = function (query) {
        this.itemsRef = this.firebase.list(this.list, function (ref) { return ref.orderByChild('nome'); });
        if (query) {
            if ((typeof query) == 'string') {
                query = [query.toLowerCase(), ''];
            }
            if ((typeof query) == 'object') {
                if (query[0])
                    query[0] = query[0].toLowerCase();
                if (query[1])
                    query[1] = query[1].toLowerCase();
            }
        }
        this.items = query.length >= 1 ? (this.itemsRef.snapshotChanges().map(function (changes) {
            var item = changes.filter(function (subItem) { return !subItem.payload.val().deleted; });
            item = item.filter(function (subItem) { return subItem.payload.val().nome.toLowerCase().includes(query[0]); });
            if (query.length > 1)
                item = item.filter(function (subItem) { return subItem.payload.val().celular.toLowerCase().includes(query[1]); });
            var newItem = item.map(function (c) {
                var payload = Object.assign({}, c.payload.val(), {});
                payload.nome = payload.nome ? payload.nome.toUpperCase() : '';
                return (__assign({ key: c.payload.key }, payload));
            });
            return newItem;
        })) : (this.itemsRef.snapshotChanges().map(function (changes) {
            var item = changes.filter(function (subItem) { return !subItem.payload.val().deleted; });
            var newItem = item.map(function (c) {
                var payload = Object.assign({}, c.payload.val(), {});
                payload.nome = payload.nome ? payload.nome.toUpperCase() : '';
                return (__assign({ key: c.payload.key }, payload));
            });
            return newItem;
        }));
        return this.items;
    };
    Customers.prototype.postCustomer = function (customer) {
        this.firebase.list(this.list).push(customer);
    };
    Customers.prototype.patchCustomer = function (id, customer) {
        this.firebase.list(this.list).update(id, customer);
    };
    Customers.prototype.deleteCustomer = function (id, customer) {
        var date = new Date();
        var time = date.getFullYear() + "-" + String(date.getMonth() + 1) + "-" + date.getDate() + " " + String(date.getHours() + 1) + ":" + String(date.getMinutes() + 1) + ":" + String(date.getSeconds() + 1);
        var deleted = Object.assign({}, customer, { deleted: {
                'userName': 'Davisa',
                'createdAt': time
            } });
        this.firebase.list(this.list).update(id, deleted);
    };
    Customers = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], Customers);
    return Customers;
}());

//# sourceMappingURL=customers.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Orders = (function () {
    function Orders(firebase) {
        this.firebase = firebase;
        this.list = '/pedidos/';
    }
    Orders.prototype.getOrders = function (query) {
        this.itemsRef = this.firebase.list(this.list, function (ref) { return ref; });
        this.items = query ? (this.itemsRef.snapshotChanges().map(function (changes) {
            var item = changes.filter(function (subItem) { return ((subItem.payload.val().nomCliente.toLowerCase().includes(query.toLowerCase())) && !subItem.payload.val().deleted); });
            return item.map(function (c) {
                var payload = Object.assign({}, c.payload.val(), {});
                payload.nomCliente = payload.nomCliente ? payload.nomCliente.toUpperCase() : '';
                payload.valVenda = payload.valVenda ? payload.valVenda.replace('.', ',') : '';
                var dateTime = payload.dataHora.split(' - ');
                var time = dateTime[0] ? dateTime[0].split(':') : '';
                var date = dateTime[1] ? dateTime[1].split('/') : '';
                var createdAt = new Date(date[2] + '-' + date[1] + '-' + date[0] + ' ' + time[0] + ':' + time[1]);
                payload.date = dateTime[0];
                payload.createdAt = createdAt;
                return (__assign({ key: c.payload.key }, payload));
            });
        })) : (this.itemsRef.snapshotChanges().map(function (changes) {
            var item = changes.filter(function (subItem) { return !subItem.payload.val().deleted; });
            return item.map(function (c) {
                var payload = Object.assign({}, c.payload.val(), {});
                payload.nomCliente = payload.nomCliente ? payload.nomCliente.toUpperCase() : '';
                payload.valVenda = payload.valVenda ? payload.valVenda.replace('.', ',') : '';
                var dateTime = payload.dataHora.split(' - ');
                if (dateTime.length > 1) {
                    var time = dateTime[0].split(':');
                    var date = dateTime[1].split('/');
                    var createdAt = new Date(date[2] + '-' + date[1] + '-' + date[0] + ' ' + time[0] + ':' + time[1]);
                    payload.createdAt = createdAt;
                }
                payload.date = dateTime[0];
                return (__assign({ key: c.payload.key }, payload));
            });
        }));
        return this.items;
    };
    Orders.prototype.postOrder = function (order) {
        this.firebase.list(this.list).push(order);
    };
    Orders.prototype.deleteOrder = function (order) {
        var date = new Date();
        var time = date.getFullYear() + "-" + String(date.getMonth() + 1) + "-" + date.getDate() + " " + String(date.getHours() + 1) + ":" + String(date.getMinutes() + 1) + ":" + String(date.getSeconds() + 1);
        var deleted = Object.assign({}, order, { deleted: {
                'userName': 'Davisa',
                'createdAt': time
            } });
        var key = order.key || '0112358132134558914423337761098715972584';
        this.firebase.list(this.list).update(key, deleted);
    };
    Orders = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], Orders);
    return Orders;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Products; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Products = (function () {
    function Products(firebase) {
        this.firebase = firebase;
        this.list = '/produtos/';
    }
    Products.prototype.getProducts = function (query) {
        this.itemsRef = this.firebase.list(this.list, function (ref) { return ref.orderByChild('desc'); }).snapshotChanges();
        this.items = (this.itemsRef.map(function (item) { return (item.filter(function (subItem) { return subItem.payload.val(); }).map(function (subItem) { return (query && subItem.payload.val().desc && subItem.payload.val().codigo && subItem.payload.val().codBarras ?
            subItem.payload.val().desc.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
                subItem.payload.val().codigo.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
                subItem.payload.val().codBarras.toLowerCase().indexOf(query.toLowerCase()) >= 0 :
            false) ? __assign({ key: subItem.payload.key }, subItem.payload.val()) :
            false; })); })).filter(function (item) {
            return item;
        });
        return this.items;
    };
    Products.prototype.postProduct = function (product) {
        this.firebase.list(this.list).push(product);
    };
    Products.prototype.patchProduct = function (id, product) {
        this.firebase.list(this.list).update(id, product);
    };
    Products.prototype.deleteProduct = function (product) {
        if (product.key) {
            this.firebase.list(this.list).remove(product.key);
        }
    };
    Products.prototype.searchProduct = function (barcode) {
        return true;
    };
    Products = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], Products);
    return Products;
    var _a;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_products__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_form_products_form__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsPage = (function () {
    function ProductsPage(alertCtrl, app, loadingCtrl, toastCtrl, navCtrl, viewCtrl, navParams, products, barcodeScanner) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.products = products;
        this.barcodeScanner = barcodeScanner;
        this.modal = false;
        this.queryText = '';
        this.barcode = "";
        this.modal = this.navParams.get('modal');
    }
    ProductsPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: ''
        });
        this.loading.present();
    };
    ProductsPage.prototype.refresh = function (refresher) {
        var _this = this;
        this.getProducts();
        setTimeout(function () {
            refresher.complete();
            var toast = _this.toastCtrl.create({
                message: 'Lista de produtos atualizada.',
                duration: 1500
            });
            toast.present();
        }, 1000);
    };
    ProductsPage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Produtos');
        this.presentLoading();
        this.getProducts();
    };
    ProductsPage.prototype.getProducts = function () {
        var _this = this;
        this.items = this.products.getProducts(this.queryText);
        this.items.subscribe(function () {
            _this.loading.dismiss();
        });
    };
    ProductsPage.prototype.setProduct = function (product) {
        if (this.modal) {
            if (product.qtd_disp) {
                this.dismiss(product);
                return false;
            }
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__products_form_products_form__["a" /* ProductsFormPage */], { data: product, edit: true });
    };
    ProductsPage.prototype.newProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__products_form_products_form__["a" /* ProductsFormPage */], { data: {}, edit: false });
    };
    ProductsPage.prototype.deleteProduct = function (product) {
        this.products.deleteProduct(product);
    };
    ProductsPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ProductsPage.prototype.onScan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeResult) {
            _this.barcodeResult = barcodeResult;
            _this.queryText = _this.barcodeResult.text;
            _this.getProducts();
        }).catch(function (error) {
            console.log('barcode error: ', error);
        });
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\products\products.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button *ngIf="!modal" ion-button menuToggle>\n\n      <ion-icon name="md-menu"></ion-icon>\n\n    </button>\n\n\n\n    <!--\n\n    <ion-title>Produtos</ion-title>\n\n    -->\n\n\n\n    <button *ngIf="modal" ion-button (click)="dismiss()">\n\n      <ion-icon name="md-close"></ion-icon>\n\n    </button>\n\n\n\n    <ion-buttons right>\n\n      <ion-fab right middle>\n\n        <button ion-fab mini color="primary" (click)="onScan()">\n\n          <ion-icon name="md-qr-scanner"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar color="primary"\n\n                   [(ngModel)]="queryText"\n\n                   (ionInput)="getProducts()"\n\n                   placeholder="Digite o código ou nome do produto...">\n\n    </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher *ngIf="queryText.length" (ionRefresh)="refresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list *ngIf="queryText.length">\n\n    <ion-item-sliding *ngFor="let item of items | async">\n\n      <ion-item *ngIf="item.desc && item.tamanho && item.cor && item.marca && item.valVenda" [ngClass]="{ \'sold-out\': item.qtd_disp < 1 }" detail-push (click)="setProduct(item)">\n\n        <h3>{{item.desc}}</h3>\n\n        \n\n        <ion-row>\n\n          <ion-col col-5><strong>Tam:</strong> {{ item.tamanho }}</ion-col>\n\n          <ion-col col-3><strong>Cor:</strong> {{ item.cor }}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col col-5><strong>Preço:</strong> {{ item.valVenda }}</ion-col>\n\n          <ion-col col-3><strong>Marca:</strong> {{ item.marca }}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col col-5><strong>Disp.:</strong> {{ item.qtd_disp }}</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" icon-only (click)="deleteProduct(item)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab (click)="newProduct()"><ion-icon name="md-add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\r.brassoroto\Documents\GitHub\myshop\src\pages\products\products.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_products__["a" /* Products */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ })

},[245]);
//# sourceMappingURL=main.js.map