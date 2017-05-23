import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '@app/config'
import {Persona} from "../../models/Personas";
//import {LoggerService} from "../logs-service/logger-service";
//import {LoggerService} from "../logs-service/logger-service";
import {Direccion} from "../../models/Direccion";

/*
  Generated class for the MenuService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PersonaService {
  public data: any;
  public personas:  Array<Persona>;



  constructor(public http: Http) {
      this.personas = new Array<Persona>();
  }


  load(){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.personas);
    }

    // don't have the data yet
    return new Promise(resolve => {
      console.log("URL:"+ENV.API_URL);
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get(ENV.API_URL)
        .map(res => res.json())
        .subscribe(data => {

          console.log("data puro:"+data.results);
          this.data = data;

         /// this.logger.log.debug("El resultado de: "+data.results);
          for (let men of this.data.results) // for acts as a foreach
          {
            this.personas.push(new Persona(
                men.name.first,
                men.name.last,
                new Direccion( men.location.street,men.location.postcode,men.location.city)
            ));
          }
          console.log("pPPPPersonas:"+this.personas);
          resolve(this.personas);
        });
    });
  }





}
