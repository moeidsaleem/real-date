import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(private afs:AngularFirestore) {
    console.log('Hello ApiProvider Provider');
  }



  /* USER */
  createUser(uid, data){
    return this.afs.doc('users/'+uid).set(data);
  }

  getUser(uid){
    return this.afs.doc('users/'+uid).valueChanges();
  }
  getUsers(){
    return this.afs.collection('users').snapshotChanges();
  }
  updateUser(uid, data){
    return this.afs.doc('users/'+uid).update(data);
  }


  getCustomUsers(gender?:string, minAge?:number, maxAge?:number){

    if(gender !=='both' && minAge && maxAge){
      return this.afs.collection('users', ref=> ref.where('gender','==',gender).where('age','>=',Number(minAge)).where('age','<=',Number(maxAge))).snapshotChanges();
    }else if(gender =='both'  && minAge && maxAge){
      return this.afs.collection('users', ref=> ref.where('minAge','>=',minAge).where('maxAge','<=',maxAge)).snapshotChanges();
    }else{
      return this.afs.collection('users').snapshotChanges();
    }
  }






}
