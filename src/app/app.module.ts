import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http'

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ConferenceApp } from './app.component';

import { CustomersPage } from '../pages/customers/customers';
import { CustomersFormPage } from '../pages/customers-form/customers-form';

import { OrdersPage } from '../pages/orders/orders';

import { ProductsPage } from '../pages/products/products';
import { ProductsFormPage } from '../pages/products-form/products-form';

import { TabsPage } from '../pages/tabs-page/tabs-page';

import { UserData } from '../providers/user-data';
import { Customers } from '../providers/services/customers';
import { Orders } from '../providers/services/orders';
import { Products } from '../providers/services/products';

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
    ConferenceApp,
    TabsPage,
    CustomersPage,
    CustomersFormPage,
    OrdersPage,
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
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: CustomersPage, name: 'Customers', segment: 'customers' },
        { component: CustomersFormPage, name: 'CustomersForm', segment: 'customers-new' },
        { component: OrdersPage, name: 'Orders', segment: 'orders' },
        { component: ProductsPage, name: 'Products', segment: 'products' },
        { component: ProductsFormPage, name: 'ProductsForm', segment: 'products-new' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    CustomersPage,
    CustomersFormPage,
    OrdersPage,
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
