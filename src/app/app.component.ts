import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePicker } from '@ionic-native/date-picker';

import { Storage } from '@ionic/storage';

import { CustomersPage } from '../pages/customers/customers';
import { OrdersPage } from '../pages/orders/orders';
import { ProductsPage } from '../pages/products/products';

import { TabsPage } from '../pages/tabs-page/tabs-page'

import { UserData } from '../providers/user-data';

import { Customers } from '../providers/services/customers';
import { Orders } from '../providers/services/orders';
import { Products } from '../providers/services/products';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.template.html'
})
export class SalesApp {
  @ViewChild(Nav) nav: Nav;

  appPages: PageInterface[] = [
    { title: 'Clientes', name: 'TabsPage', component: TabsPage, tabComponent: CustomersPage, index: 0, icon: 'people' },
    { title: 'Pedidos', name: 'TabsPage', component: TabsPage, tabComponent: OrdersPage, index: 1, icon: 'basket' },
    { title: 'Produtos', name: 'TabsPage', component: TabsPage, tabComponent: ProductsPage, index: 2, icon: 'cube' }
  ];
  rootPage: any;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public storage: Storage,
    public splashScreen: SplashScreen,
    public datePicker: DatePicker,

    public customers: Customers,
    public orders: Orders,
    public products: Products
  ) {
    this.rootPage = TabsPage;
    this.platformReady();
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }

  platformReady() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

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
  }
}
