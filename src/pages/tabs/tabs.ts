import { Component } from '@angular/core';

import { MomentPage } from '../moment/moment';
import { LoginPage } from '../login/login';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ContactPage;
  tab2Root: any = MomentPage;
  tab3Root: any = LoginPage;

  constructor() {

  }
}
