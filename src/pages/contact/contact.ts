import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contacts = [];
  constructor(public nav: NavController) {
    this.contacts = [{"contactid": 1, "contactname": "Alice", "contactmood": "Lovely day" },
      {"contactid": 2, "contactname": "Bob", "contactmood": "Sponge" },
      {"contactid": 3, "contactname": "Cat", "contactmood": "maio" },
      {"contactid": 4, "contactname": "Dog", "contactmood": "wof" },
      {"contactid": 5, "contactname": "Xue Zhiming", "contactmood": "Wanna graduate" }
     ]
  }

}
