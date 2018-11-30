import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChatPage } from '../pages/chat/chat';
import { ContactlistPage } from '../pages/contactlist/contactlist';
import { DestinoproPage } from '../pages/destinopro/destinopro';
import { DestinoproupPage } from '../pages/destinoproup/destinoproup';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { HomePage } from '../pages/home/home';
import { InsightPage } from '../pages/insight/insight';
import { MatchPage } from '../pages/match/match';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileimgPage } from '../pages/profileimg/profileimg';
import { SettingPage } from '../pages/setting/setting';
import { SplashPage } from '../pages/splash/splash';
import { TabsPage } from '../pages/tabs/tabs';


import { Firebase } from '@ionic-native/firebase';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HelperProvider } from '../providers/helper/helper';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';
import { SignupPage } from '../pages/signup/signup';


// import {IonicSwingModule} from 'ionic-swing';


@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    ContactlistPage,
    DestinoproPage,
    DestinoproupPage,
    EditprofilePage,
    HomePage,
    InsightPage,
    MatchPage,
    MyprofilePage,
    ProfilePage,
    ProfileimgPage,
    SettingPage,
    SplashPage,
    TabsPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // IonicSwingModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyCw2BVJ8NdJMTTeemiMrcn2IsO4ginFwrg",
    authDomain: "lolex-1bdb5.firebaseapp.com",
    databaseURL: "https://lolex-1bdb5.firebaseio.com",
    projectId: "lolex-1bdb5",
    storageBucket: "lolex-1bdb5.appspot.com",
    messagingSenderId: "182927816638"
  }),
  AngularFirestoreModule,
  AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    SignupPage,
    ContactlistPage,
    DestinoproPage,
    DestinoproupPage,
    EditprofilePage,
    HomePage,
    InsightPage,
    MatchPage,
    MyprofilePage,
    ProfilePage,
    ProfileimgPage,
    SettingPage,
    SplashPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HelperProvider,
    ApiProvider,
    AuthProvider,
    Firebase
  ]
})
export class AppModule {}
