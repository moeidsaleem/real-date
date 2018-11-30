import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DestinoproupPage } from '../destinoproup/destinoproup';

@Component({
  selector: 'page-destinopro',
  templateUrl: 'destinopro.html'
})
export class DestinoproPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }


  destinoproup() {
    let modal = this.modalCtrl.create(DestinoproupPage);
    modal.present();
  }
}
