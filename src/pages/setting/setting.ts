import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

structure: any = { lower: 33, upper: 60 };
  constructor(public navCtrl: NavController) {

  }


  logout(){
    this.navCtrl.setRoot(SplashPage).then(res=>{
      localStorage.clear();
      console.log(`logged OUT Bitch`)

    })
  }

}
