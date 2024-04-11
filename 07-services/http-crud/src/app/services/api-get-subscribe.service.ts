import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiGetSubscribeService {
  constructor(private readonly http: HttpClient) {}
  private url = environment.API_URL;
  public fetch$(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
