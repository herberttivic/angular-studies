import { Component, OnInit, signal } from '@angular/core';
import { ApiGetSignalService } from '../../services/api-get-signal.service';
import { JsonPipe } from '@angular/common';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-api-get-signal',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './api-get-signal.component.html',
  styleUrl: './api-get-signal.component.css',
})
export class ApiGetSignalComponent implements OnInit {
  constructor(private readonly apiService: ApiGetSignalService) {}

  // pega o get que é readonly e salva como um signal em getData
  public getData = this.apiService.getData$;
  public getUser = this.apiService.getUser$;
  public response = signal<{ message: string; body: object | null }>({
    message: '',
    body: null,
  });

  ngOnInit(): void {
    this.apiService.list$().subscribe();
    this.apiService.listUser$().subscribe();
  }
  public createUser(body: { name: string }) {
    this.apiService
      .createUser$(body)
      // .pipe(concatMap(() => aqui eu retornaria o this.api.list$ para atualizar a lista de usuarios após a criação do novo usuário.
      // o concatMap realiza algo depois do next e pede um observable como retorno))
      .subscribe({
        next: (value) => {
          this.response.set({ message: 'success', body: value });
        },
        error: (error) => {
          this.response.set({ message: 'error', body: error });
        },
      });
  }
}
