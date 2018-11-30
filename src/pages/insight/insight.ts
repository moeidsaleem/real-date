import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-insight',
  templateUrl: 'insight.html'
})
export class InsightPage {
profile: string = "today";
  constructor(public navCtrl: NavController) {

  }

}
