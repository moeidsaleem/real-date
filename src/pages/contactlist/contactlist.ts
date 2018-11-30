import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { ChatPage } from '../chat/chat';
@Component({
  selector: 'page-contactlist',
  templateUrl: 'contactlist.html'
})
export class ContactlistPage {

  constructor(public navCtrl: NavController) {

  }
 
 chat(){
   this.navCtrl.push(ChatPage);
  }


}
