import { Component, OnInit, signal } from '@angular/core';
import { ApiGetSubscribeService } from '../../services/api-get-subscribe.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-api-get-subscribe',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './api-get-subscribe.component.html',
  styleUrl: './api-get-subscribe.component.css',
})
export class ApiGetSubscribeComponent implements OnInit {
  constructor(private readonly apiService: ApiGetSubscribeService) {}

  public data = signal<any[]>([]);

  ngOnInit(): void {
    this.apiService.fetch$().subscribe({
      next: (value) => {
        this.data.set(value);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completed!');
      },
    });
  }
}
