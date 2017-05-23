/**
 * Created by juanvelezballesteros on 22/05/17.
 */
export class Direccion {

  calle: string
  numero: number
  ciudad: string


  constructor(calle:string, numero: number, ciudad:string){
    this.calle = calle;
    this.numero= numero;
    this.ciudad = ciudad;

  }

  direccionCompleta(){
    return this.calle +" "+this.numero +" "+ this.ciudad;
  }


}
