import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http'

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Contacts } from '@ionic-native/contacts'
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrMaskerModule } from 'brmasker-ionic-3';

import { SalesApp } from './app.component';

import { CustomersPage } from '../pages/customers/customers';
import { CustomersFormPage } from '../pages/customers-form/customers-form';

import { OrdersPage } from '../pages/orders/orders';
import { OrdersFormPage } from '../pages/orders-form/orders-form';
import { OrdersViewPage } from '../pages/orders-view/orders-view';

import { ProductsPage } from '../pages/products/products';
import { ProductsFormPage } from '../pages/products-form/products-form';

import { TabsPage } from '../pages/tabs-page/tabs-page';

import { UserData } from '../providers/user-data';
import { Customers } from '../providers/services/customers';
import { Orders } from '../providers/services/orders';
import { Products } from '../providers/services/products';

import { DatePipe } from '@angular/common';

export const firebaseConfig = {
  apiKey: "AIzaSyBJfyA0HoyDRGspLSWQ8g8oCfJYYg2l6XQ",
  authDomain: "davisa-modaintima.firebaseapp.com",
  databaseURL: "https://davisa-modaintima.firebaseio.com",
  projectId: "davisa-modaintima",
  storageBucket: "davisa-modaintima.appspot.com",
  messagingSenderId: "410435296849"
};

@NgModule({
  declarations: [
    SalesApp,
    TabsPage,
    CustomersPage,
    CustomersFormPage,
    OrdersPage,
    OrdersFormPage,
    OrdersViewPage,
    ProductsPage,
    ProductsFormPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(SalesApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: CustomersPage, name: 'Customers', segment: 'customers' },
        { component: CustomersFormPage, name: 'CustomersForm', segment: 'customers-new' },
        { component: OrdersPage, name: 'Orders', segment: 'orders' },
        { component: OrdersFormPage, name: 'OrdersForm', segment: 'orders-new' },
        { component: OrdersViewPage, name: 'OrdersView', segment: 'orders-view' },
        { component: ProductsPage, name: 'Products', segment: 'products' },
        { component: ProductsFormPage, name: 'ProductsForm', segment: 'products-new' }
      ]
    }),
    IonicStorageModule.forRoot(),
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SalesApp,
    CustomersPage,
    CustomersFormPage,
    OrdersPage,
    OrdersViewPage,
    OrdersFormPage,
    ProductsPage,
    ProductsFormPage,
    TabsPage
  ],
  providers: [
    Customers,
    Orders,
    Products,
    BarcodeScanner,
    UserData,
    InAppBrowser,
    SplashScreen,
    DatePicker,
    AngularFireDatabase,
    SocialSharing,
    Contacts,
    DatePipe,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
