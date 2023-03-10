import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { PaisResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v2'

  constructor( private http: HttpClient) { }

  buscarPais (termino: string): Observable<PaisResponse[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<PaisResponse[]>(url);

  }
}
