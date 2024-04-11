import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, shareReplay, tap, throwError } from 'rxjs';
interface IUser {
  id: string;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApiGetSignalService {
  private url = environment.API_URL;
  private setData$ = signal<IUser[] | null>(null);
  private setUser$ = signal<IUser | null>(null);
  // sempre que o setData$ muda, o valor do getData$ muda também através do signal
  // public getData$ = this.setData$.asReadonly()
  // teste dessa forma, caso não funcione use a forma acima com um atributo ao invés de um método
  public getData$ = this.setData$.asReadonly();
  public getUser$ = this.setUser$.asReadonly();
  public error$ = signal<string | null>(null);

  constructor(private readonly http: HttpClient) {}

  list$(): Observable<IUser[]> {
    // pipe com o shareReplay evita o multicasting (carregamento duplicado dos dados)
    // tap serve para loggar as informações no rxjs.
    this.setData$.set(null)
    return this.http.get<IUser[]>(this.url).pipe(
      shareReplay(),
      // defino o valor do setData$ com o tap
      tap((res) => this.setData$.set(res)),
      catchError((error :HttpErrorResponse)=>{
        this.error$.set(error.message)
        return throwError(()=> error)
      })
    );
  }

  listUser$(): Observable<IUser> {
    return this.http.get<IUser>(this.url + '/1').pipe(
      shareReplay(),
      tap((res) => this.setUser$.set(res)),
      catchError((error :HttpErrorResponse)=>{
        this.error$.set(error.message)
        return throwError(()=> error)
      })
    );
  }

  createUser$(body: { name: string }) {
    return this.http.post<IUser>(this.url, body).pipe(
      shareReplay(),
      catchError((error :HttpErrorResponse)=>{
        this.error$.set(error.message)
        return throwError(()=> error)
      })
    );
  }
}
