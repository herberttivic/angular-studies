import { Component, OnInit, signal } from '@angular/core';
import { ApiGetAsyncService } from '../../services/api-get-async.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-api-get-async',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './api-get-async.component.html',
  styleUrl: './api-get-async.component.css',
})
export class ApiGetAsyncComponent implements OnInit {
  constructor(private readonly apiService: ApiGetAsyncService) {}
  #data = signal<any[]>([]);

  public getData$ = this.apiService.fetch$();

  ngOnInit(): void {
    this.getData$.subscribe({
      next: (value) => {
        console.log(value);
        this.#data.set(value);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
