import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/login';

  public login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(this.url, { email, password }).pipe(
      tap({
        next(value) {
            console.log("next")
        },
      })
    );
  }
}
