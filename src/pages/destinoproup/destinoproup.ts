import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-destinoproup',
  templateUrl: 'destinoproup.html'
})
export class DestinoproupPage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController) {

  }
dismiss() {
		this.viewCtrl.dismiss();
	}
      slides = [
    {
      description: "Can Wows on unlimited account",
      pack_type:"Unlimited Wows",
      image: "assets/imgs/ic_wows.png",
    },
    {
      description: "Can Wows on unlimited account",
       pack_type:"Enable Insight",
      image: "assets/imgs/ic_insigt.png",
    },
    {
      description: "Your account will be on top in your area",
       pack_type:"Be on top",
      image: "assets/imgs/ic_top.png",
    },
    {
      description: "Can share photos, videos, docs & more",
       pack_type:"Share attavhment in message",
      image: "assets/imgs/ic_attachment.png",
    }
  ];

}
