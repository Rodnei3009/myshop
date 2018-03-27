webpackJsonp([0],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_customers__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customers_form_customers_form__ = __webpack_require__(290);
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
    CustomersPage.prototype.deleteCustomer = function (customer) {
        this.customers.deleteCustomer(customer);
    };
    CustomersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customers',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\customers\customers.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="getCustomers()"\n                   placeholder="Buscar">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="refresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items | async">\n      <ion-item (click)="setCustomer(item)">\n        <ion-label>\n          {{item.nome}}\n        </ion-label>\n        <ion-icon name="md-arrow-dropright" item-end></ion-icon>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" icon-only (click)="deleteCustomer(item.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right #fab>\n    <button ion-fab (click)="newCustomer()"><ion-icon name="md-add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\customers\customers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_customers__["a" /* Customers */]])
    ], CustomersPage);
    return CustomersPage;
}());

//# sourceMappingURL=customers.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_orders__ = __webpack_require__(141);
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
    function OrdersPage(alertCtrl, app, loadingCtrl, toastCtrl, navCtrl, orders) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.orders = orders;
        this.queryText = '';
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
                message: 'Lista de clientes atualizada.',
                duration: 1500
            });
            toast.present();
        }, 1000);
    };
    OrdersPage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Clientes');
        //this.presentLoading();
        this.getOrders();
    };
    OrdersPage.prototype.getOrders = function () {
        this.items = this.orders.getOrders(this.queryText);
        this.items.subscribe(function () {
            //this.loading.dismiss();
        });
        //this.loading.dismiss();
    };
    OrdersPage.prototype.setOrder = function (order) {
        console.log(order);
        // this.navCtrl.push(OrdersFormPage, { data: order, edit: true });
    };
    OrdersPage.prototype.newOrder = function () {
        // this.navCtrl.push(OrdersFormPage, { data: { }, edit: false });
    };
    OrdersPage.prototype.deleteOrder = function (id) {
        console.log(id);
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\orders\orders.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="getOrders()"\n                   placeholder="Buscar">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="refresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-group *ngFor="let item of items | async">\n      <ion-item detail-push (click)="setOrder(item)">\n        <ion-label>\n          {{item.nome}}\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-fab bottom right #fab>\n    <button ion-fab><ion-icon name="md-add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\orders\orders.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_orders__["a" /* Orders */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
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
    }
    Orders.prototype.getOrders = function (query) {
        this.itemsRef = this.firebase.list('/pedidos/', function (ref) { return ref; });
        this.items = query ? (this.itemsRef.snapshotChanges().map(function (changes) {
            var item = changes.filter(function (subItem) { return ((subItem.payload.val().nome.toLowerCase().includes(query.toLowerCase())) && !subItem.payload.val().delete); });
            return item.map(function (c) {
                var payload = Object.assign({}, c.payload.val(), {});
                payload.desc = payload.desc.toUpperCase();
                console.log(payload);
                return (__assign({ key: c.payload.key }, payload));
            });
        })) : (this.itemsRef.snapshotChanges().map(function (changes) {
            var item = changes.filter(function (subItem) { return !subItem.payload.val().delete; });
            return item.map(function (c) {
                var payload = Object.assign({}, c.payload.val(), {});
                payload.desc = payload.desc.toUpperCase();
                console.log(payload);
                return (__assign({ key: c.payload.key }, payload));
            });
        }));
        return this.items;
    };
    Orders = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], Orders);
    return Orders;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_products__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_form_products_form__ = __webpack_require__(291);
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
    function ProductsPage(alertCtrl, app, loadingCtrl, toastCtrl, navCtrl, products) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.products = products;
        this.queryText = '';
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_form_products_form__["a" /* ProductsFormPage */], { data: product, edit: true });
    };
    ProductsPage.prototype.newProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_form_products_form__["a" /* ProductsFormPage */], { data: {}, edit: false });
    };
    ProductsPage.prototype.deleteProduct = function (product) {
        this.products.deleteProduct(product);
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\products\products.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="getProducts()"\n                   placeholder="Buscar">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="refresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items | async">\n      <ion-item (click)="setProduct(item)">\n        <ion-row>\n          <ion-col justify-content-start>\n            <strong>{{item.desc}}</strong>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col justify-content-start col-5><strong>Tam:</strong> {{ item.tamanho }}</ion-col>\n          <ion-col justify-content-end col-3><strong>Cor:</strong> {{ item.cor }}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col justify-content-end col-5><strong>Preço:</strong> {{ item.valVenda }}</ion-col>\n          <ion-col justify-content-start col-3><strong>Marca:</strong> {{ item.marca }}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col justify-content-start col-5><strong>Disp.:</strong> {{ item.qtd_disp }}</ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item-options side="right">\n          <button ion-button color="danger" icon-only (click)="deleteProduct(item)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right #fab>\n    <button ion-fab (click)="newProduct()"><ion-icon name="md-add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\products\products.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_products__["a" /* Products */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 197:
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
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_customers__ = __webpack_require__(79);
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
    function CustomersFormPage(alertCtrl, app, loadingCtrl, navCtrl, navParams, formBuilder, datePicker, customers) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.datePicker = datePicker;
        this.customers = customers;
        this.data = '';
        this.edit = false;
        this.queryText = '';
        this.customerId = '';
        this.form = this.formBuilder.group({
            nome: [this.navParams.get('data').nome, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: [this.navParams.get('data').email],
            celular: [this.navParams.get('data').celular, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            sexo: [this.navParams.get('data').Sexo],
            prof: [this.navParams.get('data').prof],
            estcivil: [this.navParams.get('data').estcivil],
            aniver: [this.birthday],
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
        }
        else {
            this.customerId = '';
        }
        console.log(this.customerId);
    }
    CustomersFormPage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Novo Cliente');
    };
    CustomersFormPage.prototype.getBirthdayPicker = function () {
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
    };
    CustomersFormPage.prototype.onSubmit = function () {
        console.log(this.form.value);
        if (this.customerId) {
            console.log(this.customerId, this.form.value);
            //this.customers.patchCustomer(this.customerId, this.form.value);
        }
        else {
            console.log(this.form.value);
            //this.customers.postCustomer(this.form.value);
        }
        this.navCtrl.pop();
    };
    CustomersFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customers-form',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\customers-form\customers-form.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="md-menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form" (ngSubmit)="onSubmit(); $event.preventDefault()">\n    <ion-item>    \n      <ion-icon name="md-person" item-left></ion-icon>\n      <ion-input type="text" placeholder="Nome" formControlName="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-phone-portrait" item-left></ion-icon>\n      <ion-input type="tel" placeholder="Celular" formControlName="celular"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-at" item-left></ion-icon>\n      <ion-input type="text" placeholder="E-mail" formControlName="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-body" item-left></ion-icon>\n      <ion-select interface="action-sheet" placeholder="Sexo" formControlName="sexo">\n        <ion-option value="F">Feminino</ion-option>\n        <ion-option value="M">Masculino</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-construct" item-left></ion-icon>\n      <ion-input type="text" placeholder="Profissão" formControlName="prof"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-contacts" item-left></ion-icon>\n      <ion-input type="text" placeholder="Estado Civil" formControlName="estcivil"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-hand" item-left></ion-icon>\n      <ion-input type="text" placeholder="Aniversário" formControlName="aniver" (focus)="getBirthdayPicker()" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-card" item-left></ion-icon>\n      <ion-input type="number" placeholder="CPF" formControlName="CPF"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-finger-print" item-left></ion-icon>\n      <ion-input type="number" placeholder="RG" formControlName="RG"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-home" item-left></ion-icon>\n      <ion-input type="text" placeholder="Endereço" formControlName="endereco"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-infinite" item-left></ion-icon>\n      <ion-input type="text" placeholder="Complemento" formControlName="complemento"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-information-circle" item-left></ion-icon>\n      <ion-input type="text" placeholder="Indicação" formControlName="indicacao"></ion-input>\n    </ion-item>\n    \n    <ion-row>\n      <ion-col>\n        <button ion-button block type="button" [disabled]="form.invalid" color="primary" (click)="onSubmit()">Salvar</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\customers-form\customers-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_customers__["a" /* Customers */]])
    ], CustomersFormPage);
    return CustomersFormPage;
}());

//# sourceMappingURL=customers-form.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_products__ = __webpack_require__(80);
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
    function ProductsFormPage(alertCtrl, app, loadingCtrl, navCtrl, navParams, formBuilder, products, BarcodeScanner) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.products = products;
        this.BarcodeScanner = BarcodeScanner;
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
        this.app.setTitle('Novo Produto');
    };
    ProductsFormPage.prototype.onSubmit = function () {
        if (this.productId && this.edit === true) {
            this.products.patchProduct(this.productId, this.form.value);
        }
        else {
            this.products.postProduct(this.form.value);
        }
        this.navCtrl.pop();
    };
    ProductsFormPage.prototype.onScan = function () {
        var _this = this;
        this.BarcodeScanner.scan().then(function (barcodeResult) {
            _this.barcodeResult = barcodeResult;
            _this.barcode = _this.barcodeResult.text;
            _this.form.patchValue({ 'codBarras': _this.barcode });
        }).catch(function (error) {
            console.log('barcode error: ', error);
        });
    };
    ProductsFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products-form',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\products-form\products-form.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-buttons right>\n      <ion-fab right middle>\n        <button ion-fab mini color="primary" (click)="onScan()">\n          <ion-icon name="md-qr-scanner"></ion-icon>\n        </button>\n      </ion-fab>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form" (ngSubmit)="onSubmit(); $event.preventDefault()">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="md-barcode" item-left></ion-icon>\n            <ion-input type="text" placeholder="Código de barras" formControlName="codBarras"></ion-input>  \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="md-shirt" item-left></ion-icon>\n            <ion-input type="text" placeholder="Produto" formControlName="desc"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="md-information-circle" item-left></ion-icon>\n            <ion-input type="text" placeholder="Código" formControlName="codigo"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="md-pricetag" item-left></ion-icon>\n            <ion-select interface="action-sheet" placeholder="Marca" formControlName="marca">\n              <ion-option value="DeMillus">DeMillus</ion-option>\n              <ion-option value="Valisere">Valisére</ion-option>\n              <ion-option value="ValFrance">ValFrance</ion-option>\n              <ion-option value="Toque Intimo">Toque Íntimo</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="md-color-palette" item-left></ion-icon>\n            <ion-input type="text" placeholder="Cor" formControlName="cor"></ion-input>  \n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="md-expand" item-left></ion-icon>\n            <ion-input type="text" placeholder="Tamanho" formControlName="tamanho"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="md-calculator" item-left></ion-icon>\n            <ion-input type="number" placeholder="Valor compra" formControlName="valCompra"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="md-calculator" item-left></ion-icon>\n            <ion-input type="number" placeholder="Valor venda" formControlName="valVenda"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="md-archive" item-left></ion-icon>\n            <ion-input type="number" placeholder="Quantidade" formControlName="qtd_disp"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block type="button" [disabled]="form.invalid" color="primary" (click)="onSubmit()">Salvar</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\products-form\products-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_products__["a" /* Products */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ProductsFormPage);
    return ProductsFormPage;
}());

//# sourceMappingURL=products-form.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customers_customers__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_orders__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(142);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\tabs-page\tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n  <ion-tab [root]="tab1Root" tabTitle="Clientes" tabIcon="people" tabUrlPath="customers"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Pedidos" tabIcon="basket" tabUrlPath="orders"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Produtos" tabIcon="cube" tabUrlPath="products"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\pages\tabs-page\tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(130);
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
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_customers_customers__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_customers_form_customers_form__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_orders_orders__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_products_products__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_products_form_products_form__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_page_tabs_page__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_data__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_services_customers__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_services_orders__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_services_products__ = __webpack_require__(80);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_customers_customers__["a" /* CustomersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_customers_form_customers_form__["a" /* CustomersFormPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_products_form_products_form__["a" /* ProductsFormPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_customers_customers__["a" /* CustomersPage */], name: 'Customers', segment: 'customers' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_customers_form_customers_form__["a" /* CustomersFormPage */], name: 'CustomersForm', segment: 'customers-new' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_orders_orders__["a" /* OrdersPage */], name: 'Orders', segment: 'orders' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_products_products__["a" /* ProductsPage */], name: 'Products', segment: 'products' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_products_form_products_form__["a" /* ProductsFormPage */], name: 'ProductsForm', segment: 'products-new' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_customers_customers__["a" /* CustomersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_customers_form_customers_form__["a" /* CustomersFormPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_products_form_products_form__["a" /* ProductsFormPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_page_tabs_page__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__providers_services_customers__["a" /* Customers */],
                __WEBPACK_IMPORTED_MODULE_22__providers_services_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_23__providers_services_products__["a" /* Products */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_20__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_customers_customers__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_products_products__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_data__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_services_customers__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_services_orders__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_services_products__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, storage, splashScreen, datePicker, customers, orders, products) {
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
    ConferenceApp.prototype.openPage = function (page) {
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
        if (page.logsOut === true) {
            this.userData.logout();
        }
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\app\app.template.html"*/'<ion-split-pane>\n  <ion-menu id="loggedOutMenu" [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Davisa</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n      <ion-list>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\myshop\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_10__providers_services_customers__["a" /* Customers */],
            __WEBPACK_IMPORTED_MODULE_11__providers_services_orders__["a" /* Orders */],
            __WEBPACK_IMPORTED_MODULE_12__providers_services_products__["a" /* Products */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
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
    }
    Customers.prototype.getCustomers = function (query) {
        this.itemsRef = this.firebase.list('/clientes/', function (ref) { return ref.orderByChild('nome'); });
        this.items = query ? (this.itemsRef.snapshotChanges().map(function (changes) {
            var item = changes.filter(function (subItem) { return ((subItem.payload.val().nome.toLowerCase().includes(query.toLowerCase())) && !subItem.payload.val().delete); });
            return item.map(function (c) {
                var payload = Object.assign({}, c.payload.val(), {});
                payload.nome = payload.nome.toUpperCase();
                return (__assign({ key: c.payload.key }, payload));
            });
        })) : (this.itemsRef.snapshotChanges().map(function (changes) {
            var item = changes.filter(function (subItem) { return !subItem.payload.val().delete; });
            return item.map(function (c) {
                var payload = Object.assign({}, c.payload.val(), {});
                payload.nome = payload.nome.toUpperCase();
                return (__assign({ key: c.payload.key }, payload));
            });
        }));
        return this.items;
    };
    Customers.prototype.postCustomer = function (customer) {
        this.firebase.list('/clientes/').push(customer);
    };
    Customers.prototype.patchCustomer = function (id, customer) {
        this.firebase.list('/clientes/').update(id, customer);
    };
    Customers.prototype.deleteCustomer = function (customer) {
        var date = new Date();
        var time = date.getFullYear() + "-" + String(date.getMonth() + 1) + "-" + date.getDate() + " " + String(date.getHours() + 1) + ":" + String(date.getMinutes() + 1) + ":" + String(date.getSeconds() + 1);
        var deleted = Object.assign({}, customer, { delete: {
                'userName': 'Davisa',
                'createdAt': time
            } });
        var key = customer.key || '0112358132134558914423337761098715972584';
        this.firebase.list('/clientes/').update(key, deleted);
    };
    Customers = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], Customers);
    return Customers;
}());

//# sourceMappingURL=customers.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Products; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
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
    }
    Products.prototype.getProducts = function (query) {
        this.itemsRef = this.firebase.list('/produtos/', function (ref) { return ref.orderByChild('desc'); });
        this.items = query ? (this.itemsRef.snapshotChanges().map(function (changes) {
            var item = changes.filter(function (subItem) { return ((subItem.payload.val().desc.toLowerCase().includes(query.toLowerCase()) || subItem.payload.val().marca.toLowerCase().includes(query.toLowerCase())) && !subItem.payload.val().delete); });
            return item.map(function (c) {
                var payload = Object.assign({}, c.payload.val(), {});
                payload.desc = payload.desc.toUpperCase();
                return (__assign({ key: c.payload.key }, payload));
            });
        })) : (this.itemsRef.snapshotChanges().map(function (changes) {
            var item = changes.filter(function (subItem) { return !subItem.payload.val().delete; });
            return item.map(function (c) {
                var payload = Object.assign({}, c.payload.val(), {});
                payload.desc = payload.desc.toUpperCase();
                return (__assign({ key: c.payload.key }, payload));
            });
        }));
        return this.items;
    };
    Products.prototype.postProduct = function (product) {
        this.firebase.list('/produtos/').push(product);
    };
    Products.prototype.patchProduct = function (id, product) {
        this.firebase.list('/produtos/').update(id, product);
    };
    Products.prototype.deleteProduct = function (product) {
        var date = new Date();
        var time = date.getFullYear() + "-" + String(date.getMonth() + 1) + "-" + date.getDate() + " " + String(date.getHours() + 1) + ":" + String(date.getMinutes() + 1) + ":" + String(date.getSeconds() + 1);
        var deleted = Object.assign({}, product, { delete: {
                'userName': 'Davisa',
                'createdAt': time
            } });
        var key = product.key || '0112358132134558914423337761098715972584';
        this.firebase.list('/produtos/').update(key, deleted);
    };
    Products = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], Products);
    return Products;
}());

//# sourceMappingURL=products.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map