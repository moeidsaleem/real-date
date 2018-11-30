import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {
 gender: string = "n64";
 interest: string = "n64";
  constructor(public navCtrl: NavController, private api:ApiProvider) {

  }

  ionViewDidLoad(){
    this.getProfile();

  }

user;
  //get users
  getProfile(){
    let uid = localStorage.getItem('uid');
    this.api.getUser(uid).subscribe(res=>{
      this.user = res;
      console.log(this.user);
    })
  }


  updateProfile(){
    let uid = localStorage.getItem('uid');
    this.api.updateUser(uid, this.user).then(res=>{
      console.log(`profile updated`);

    })
  }
}
