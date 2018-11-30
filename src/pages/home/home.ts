import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DestinoproPage } from '../destinopro/destinopro';
import { ApiProvider } from '../../providers/api/api';
import { map } from 'rxjs/operators/map';
import { HelperProvider } from '../../providers/helper/helper';
import { MatchPage } from '../match/match';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public helper:HelperProvider,private api:ApiProvider){}

  ionViewDidEnter(){
    this.getUsers();
  }

  number=0;
   profile(){
   this.navCtrl.push(ProfilePage, this.user);
  }
 destinopro(){
   this.navCtrl.push(DestinoproPage);
  }


userProfile;


  users;
  user;
  getUsers(){
    let uid = localStorage.getItem('uid')
    return  this.api.getUser(uid).subscribe(profile=>{
      this.userProfile = profile;
     this.api.getUsers()
    .pipe(map( docArray => {
      return docArray.map( doc => {
        let data = doc.payload.doc.data();
        let id = doc.payload.doc.id;
        let liked = false;
        let found = this.userProfile.likes.find(function(element) {
          return element == uid;
        });
        if(found){
          liked =true;
        }
        return(
          {
          id,liked,...data }
        // doc
      );
      });
    })).subscribe(res=>{
      res = res.filter(item => item.id !== localStorage.getItem('uid'))
      this.users = res;
      console.log(this.users);
      this.user = this.users[this.number];
    })


  })
  }


  getUser(){
    this.user = this.users[this.number]
  }
  nextUser(){
    if(this.number == this.users.length-1){
      this.number =0;
      this.getUser();

    }else{
      this.number++;
      this.getUser();
    }

  }
  previousUser(){
    if(this.number ==0){
      this.number = this.users.length;
      this.getUser();
    }
    if(this.number !==0){
      this.number--;
      this.getUser();
    }
  }


  match(){
    this.helper.loadMessage(`Matching.`);

    // userProfile ---- user
    setTimeout(()=>{
      this.navCtrl.push(MatchPage, this.user).then(res=>{
        this.helper.dismiss();
      })

    },2000)
   }


  wow(){
    let uid =localStorage.getItem('uid');
    if(this.user.liked == true){ /* ALREADY LIKED? REMOVE USER ID FROM  TO MAKE IS UNLIKE */
      this.userProfile.likes = this.userProfile.likes.filter(e => e !== this.user.id) /* remove uid from likes */
       this.user.liked = false;
      //update my profile
      this.api.updateUser(uid, this.userProfile).then(res=> this.helper.presentBottomToast(`You unlike ${this.user.name}`));
    }else if(this.user.liked == false){  /*  TIME TO LIKE THIS */
      this.userProfile.likes.push(this.user.id);
      this.user.liked = true;

    }

  }


  nope(){
    this.user.dislikes++;
    this.api.updateUser(this.user.id, this.user).then(con=>{
      this.helper.presentToast(`You Disliked ${this.user.name} Profile!`,3000,'bottom');
      this.nextUser();
    })

  }





}
