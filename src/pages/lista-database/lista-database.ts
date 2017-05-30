import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaDatabasePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var require: any;
var loki = require('lokijs');
var localforage = require('localforage');


@IonicPage()
@Component({
  selector: 'page-lista-database',
  templateUrl: 'lista-database.html',
})
export class ListaDatabasePage {

  db: any;
  listado: any;
  nombreComida: string;
  precioComida: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {



    this.importAll();
  this.db = new loki('comidaDB');
    this.listado = this.db.addCollection('comida');
    console.log("ya se impacto la base de datos"+this.listado);
    //console.log("inserted document: " + this.listado.get(length));
    console.log("robots..length: " + this.listado.length);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDatabasePage');
  }


  addDocument() {
    if (!this.nombreComida || !this.precioComida) {
      console.log("field is blank..."); return;
    } this.listado.insert({ name: this.nombreComida, precio: this.precioComida });
    console.log("inserted document: " + this.listado.get(length));
    console.log("robots.data.length: " + this.listado.data.length);
  }
  deleteDocument($event, comida) {
    console.log("robot to delete: name = " + comida.name + ", TV show = ", comida.precioComida);
    console.log("targeting document at collection index: " + comida.$loki);
    this.listado.remove(comida.$loki);
  }

  saveAll() {
    console.log( JSON.stringify(this.db));
    localforage.setItem('storeKey', JSON.stringify(this.db))
       .then(function (value) {
              console.log('database successfully saved');
       }).catch(function(err) {
         console.log('error while saving: ' + err); });
  }

  importAll() {
      var self = this;
      console.log("aqui se guarda en el import all");
      localforage.getItem('storeKey').then(function(value) {
      console.log('the full database has been retrieved');
      self.db.loadJSON(value);
      self.listado = self.db.getCollection('comida');

    }).catch(function(err) {
      console.log('error importing database: ' + err); });
  }


  convert2Array(val) {
    return Array.from(val);
  }

}
