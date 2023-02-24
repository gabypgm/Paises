import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino = ''
  buscar () {
    this.paisService.buscarPais(this.termino).subscribe(
      respuesta => {
        console.log(respuesta)
      }
    )
  }
  constructor (private paisService: PaisService) {}

}
