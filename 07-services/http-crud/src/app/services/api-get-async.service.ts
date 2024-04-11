import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiGetAsyncService {
  private url = environment.API_URL;
  constructor(private readonly http: HttpClient) {}

  fetch$() : Observable<any[]> {
    // pipe com o shareReplay evita o multicasting (carregamento duplicado dos dados)
    return this.http.get<any[]>(this.url).pipe(shareReplay());
  }
}
