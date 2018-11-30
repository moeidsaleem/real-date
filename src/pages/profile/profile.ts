import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DestinoproPage } from '../destinopro/destinopro';
import { ProfileimgPage } from '../profileimg/profileimg';
import { MatchPage } from '../match/match';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
all_about: string = "gallery";
  constructor(public navCtrl: NavController,private navParams:NavParams) {

  }

  user;

  ionViewDidEnter(){
    this.user = this.navParams.data;
    console.log(this.user);
  }
  profile = [
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"},
    {image: "assets/imgs/img1.png"}
  ];

  destinopro(){
   this.navCtrl.push(DestinoproPage);
  }
  profileimg(){
   this.navCtrl.push(ProfileimgPage);
  }

  match(){
   this.navCtrl.push(MatchPage);
  }
}
