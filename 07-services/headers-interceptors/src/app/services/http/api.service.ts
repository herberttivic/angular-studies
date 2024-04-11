import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../../app.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private readonly http: HttpClient) {}

  public getPokemon(id : string): Observable<IPokemon> {
    return this.http.get<IPokemon>(this.url + id);
  }
}
