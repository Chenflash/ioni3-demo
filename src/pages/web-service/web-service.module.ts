import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebServicePage } from './web-service';

@NgModule({
  declarations: [
    WebServicePage,
  ],
  imports: [
    IonicPageModule.forChild(WebServicePage),
  ],
  exports: [
    WebServicePage
  ]
})
export class WebServicePageModule {}
