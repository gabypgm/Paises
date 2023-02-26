import { Component, Input } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() paisest: PaisResponse[] = []
}
