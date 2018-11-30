import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-match',
  templateUrl: 'match.html'
})
export class MatchPage {

  user;
  constructor(public navCtrl: NavController, private navParams:NavParams) {

  }

  ionViewDidEnter(){
    this.user = this.navParams.data;
  }


  notNow(){
    this.navCtrl.pop();
  }
}
