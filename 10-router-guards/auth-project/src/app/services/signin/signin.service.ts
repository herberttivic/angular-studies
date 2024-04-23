import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
interface IPropsSignin  {
  name: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private http = inject(HttpClient);
  private url = 'http://localhost:3000/login';

  public signin({
    name,
    email,
    password,
  }: IPropsSignin): Observable<any> {
    return this.http.post(this.url, {name, email, password }).pipe(
      tap({
        next(value) {
            console.log("next")
        },
      })
    );
  }
}
