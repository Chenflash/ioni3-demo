import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageLoaderPage } from './image-loader';

@NgModule({
  declarations: [
    ImageLoaderPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageLoaderPage),
  ],
  exports: [
    ImageLoaderPage
  ]
})
export class ImageLoaderPageModule {}
