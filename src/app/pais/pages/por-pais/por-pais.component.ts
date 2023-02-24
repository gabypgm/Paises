import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino = ''
  hayError: boolean = false
  buscar () {
    this.hayError = false
    this.paisService.buscarPais(this.termino).subscribe(
      respuesta => {
        console.log(respuesta)
      }, (err) => {
        this.hayError = true
      }
    )
  }
  constructor (private paisService: PaisService) {}

}
