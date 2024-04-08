import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetterService {
  constructor(private readonly http: HttpClient) {}
  private readonly url = 'https://jsonplaceholder.typicode.com/todos/';

  public fetchData(id : string): Observable<any[]> {
    return this.http.get<any[]>(this.url+id);
  }
}
