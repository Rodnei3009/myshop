import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { CustomersPage } from '../customers/customers';
import { OrdersPage } from '../orders/orders';
import { ProductsPage } from '../products/products';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = CustomersPage;
  tab2Root: any = OrdersPage;
  tab3Root: any = ProductsPage;

  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}