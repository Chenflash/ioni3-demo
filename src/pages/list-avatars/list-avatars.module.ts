import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAvatarsPage } from './list-avatars';

@NgModule({
  declarations: [
    ListAvatarsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAvatarsPage),
  ],
  exports: [
    ListAvatarsPage
  ]
})
export class ListAvatarsPageModule {}
