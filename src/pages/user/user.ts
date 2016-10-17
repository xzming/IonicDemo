import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage {

   constructor(public navCtrl: NavController) {

   }

   logout(){
     this.navCtrl.pop(LoginPage);
   }


}
