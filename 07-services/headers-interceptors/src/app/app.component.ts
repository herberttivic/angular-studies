import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/http/api.service';

export interface IPokemon {
  name: string;
  id: string;
  sprites: {
    front_default: string;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private readonly api: ApiService) {}
  public data = signal<IPokemon | null>(null);
  public error = signal<string | null>(null);
  public loading = signal(false);
  findPokemon(id : string) {
    this.loading.set(true);
    this.data.set(null);
    this.error.set(null);
    this.api.getPokemon(id).subscribe({
      next: (value) => {

        this.data.set(value);
      },
      error: (error) => {
        console.log(error);

        this.error.set(
          'Erro ao buscar esse pokemon, verifique se o id ou o nome está correto!'
        );
      },
    });
    this.loading.set(false);
  }
}
