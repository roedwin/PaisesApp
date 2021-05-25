import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../Services/pais.service';
import { Country } from '../Interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: Country;

  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.getPaisPorCodigo( id ) ),
      tap( console.log )
    )
    .subscribe( pais => this.pais = pais);

    // this.activatedRoute.params.subscribe( ({ id }) => {
    //   console.log( id );
    //   this.paisService.getPaisPorCodigo( id ).subscribe( pais => {
    //     console.log(pais)
    //   })
    // });
  }

}
