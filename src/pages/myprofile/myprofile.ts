import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InsightPage } from '../insight/insight';
import { SettingPage } from '../setting/setting';
import { EditprofilePage } from '../editprofile/editprofile';
import { ApiProvider } from '../../providers/api/api';
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html'
})
export class MyprofilePage {
all_about: string = "gallery";
  constructor(public navCtrl: NavController,private api:ApiProvider) {

  }

profile = [
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"}
  ];


  user;


  ionViewDidLoad(){
    this.getProfile();
  }

  getProfile(){
    let uid = localStorage.getItem('uid');
    this.api.getUser(uid).subscribe(res=>{
      this.user = res;
    })
  }
 insight(){
   this.navCtrl.push(InsightPage);
  }

  setting(){
   this.navCtrl.push(SettingPage);
  }
  editprofile(){
   this.navCtrl.push(EditprofilePage);
  }
}
