import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDatabasePage } from './lista-database';

@NgModule({
  declarations: [
    ListaDatabasePage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDatabasePage),
  ],
  exports: [
    ListaDatabasePage
  ]
})
export class ListaDatabasePageModule {}
