import { Component, Input } from '@angular/core';
import { PaisService } from '../../Services/pais.service';
import { Country } from '../../pages/Interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent {


  @Input() paises: Country[] = []

  constructor( private paisService: PaisService ) { }



}
