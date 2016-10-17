import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {
   constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

   onLogin(){
     this.navCtrl.push(UserPage);
   }

   openSignup() {
     let Modal = this.modalCtrl.create(SignupPage);
     Modal.present();
  }

}
