import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profileimg',
  templateUrl: 'profileimg.html'
})
export class ProfileimgPage {

  constructor(public navCtrl: NavController) {

  }
 slides = [
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"}
  ];
}
