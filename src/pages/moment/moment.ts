import { Component } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-moment',
  templateUrl: 'moment.html'
})

export class MomentPage {
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Post',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Camera',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Album',
          icon: !this.platform.is('ios') ? 'albums' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present()
  }
}
