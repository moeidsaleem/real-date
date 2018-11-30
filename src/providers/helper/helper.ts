import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';

/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {

  loader: any;

  constructor(private alertCtrl:AlertController, private loadingCtrl: LoadingController,
     private toastCtrl:ToastController) {
    console.log('Hello HelperProvider Provider');
  }


  loadMessage(msg) {
    this.loader = this.loadingCtrl.create({
      content: msg
    });
    this.loader.present();
  }
  load() {
    this.loader = this.loadingCtrl.create({
      content: ''
    });
    this.loader.present();
  }

  dismiss() {
    if(this.loader){ this.loader.dismiss(); this.loader = null; }
  }




  presentConfirm(title,message,successButton, cancelButton, onsuccess,oncancel) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: cancelButton,
          role: 'cancel',
          handler: oncancel
        },
        {
          text: successButton,
          handler:onsuccess
        }
      ]
    });
    alert.present();
  }
  presentPrompt(title, inputs,buttons) {
    let alert = this.alertCtrl.create({
      title: title,
      inputs:inputs
      //  [
      //   {
      //     name: 'username',
      //     placeholder: 'Username'
      //   },
      //   {
      //     name: 'password',
      //     placeholder: 'Password',
      //     type: 'password'
      //   }
      // ]
      ,buttons:buttons
      //  [
      //   {
      //     text: 'Cancel',
      //     role: 'cancel',
      //     handler: data => {
      //       console.log('Cancel clicked');
      //     }
      //   },
      //   {
      //     text: 'Login',
      //     handler: data => {
      //       if (User.isValid(data.username, data.password)) {
      //         // logged in!
      //       } else {
      //         // invalid login
      //         return false;
      //       }
      //     }
      //   }
      // ]
    });
    alert.present();
  }


  presentToast(msg,dur,pos) {
    let t = this.toastCtrl.create({
      message: msg,
      duration: dur || 3000,
      position: pos || 'bottom'
    });

    t.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    t.present();
  }

  presentBottomToast(msg){
    this.toastCtrl.create({
      message:msg,
      duration:2300,
      position:'bottom'
    }).present();
  }

}
