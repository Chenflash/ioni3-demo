import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    IonicImageLoader
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
