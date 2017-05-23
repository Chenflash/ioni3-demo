import {Direccion} from "./Direccion";

export class Persona{

  nombre: string;
  apellidos: string;
  direccion: Direccion;


  constructor( nombre: string,  apellido: string,  direccion: Direccion){
    this.nombre = nombre;
    this.apellidos = apellido;
    this.direccion = direccion;
  }


   nombreCompleto():string{

    return this.nombre +" "+this.apellidos;
  } ;





}
