import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino = ''
  hayError: boolean = false
  paises : PaisResponse[] = []
  buscar () {
    this.hayError = false
    this.paisService.buscarPais(this.termino).subscribe(
      respuesta => {
        this.paises = respuesta
      }, (err) => {
        this.hayError = true
        this.paises = []
      }
    )
  }
  constructor (private paisService: PaisService) {}

}
