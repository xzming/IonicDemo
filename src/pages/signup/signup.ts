import { Component } from '@angular/core';

import { NavController,ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'signup.html'
})

export class SignupPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
