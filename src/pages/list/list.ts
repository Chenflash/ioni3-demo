import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PersonaService} from '../../providers/personas-service/personas-service';
import {DetailPage} from "../detail/detail";
import {Persona} from "../../models/Personas";

@Component({
  selector: 'page-list',
  providers:[PersonaService],
  templateUrl: 'list.html'
})
export class ListPage {

  selectedItem: any;
  icons: string[];
  personas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuService: PersonaService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.personas = new Array<Persona>();
    this.loadMenu();
    ///this.logger.log.debug('Debug this');

    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];




  }


  loadMenu() {
    this.menuService.load()
      .then(personas => {
        console.log("Personas en loadMenu:"+personas);
        this.personas = personas;

      });

  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }
}
