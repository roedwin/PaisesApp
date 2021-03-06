import { Component } from '@angular/core';

import { PaisService } from '../../Services/pais.service';

import { Country } from '../Interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] =[];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe( paises => {
      this.paises = paises;
      console.log(this.paises)
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });

  }
  sugerencias( termino: string ) {
    this.hayError = false;
    // TODO crear sugerencias
  }

}
