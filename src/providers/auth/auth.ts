import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Firebase } from '@ionic-native/firebase';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  recaptchaVerifier

  constructor(private afAuth:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
    // this.recaptchaVerifier = firebase.auth

  }



  login(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  signup(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  loginWithPhone(phone){
    return this.afAuth.auth.signInWithPhoneNumber(phone,this.recaptchaVerifier);
  }
}
