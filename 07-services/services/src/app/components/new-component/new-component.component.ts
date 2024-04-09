import {  Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  providers: [ApiService],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css',
})
export class NewComponentComponent implements OnInit{
  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    console.log(this.api.data());
    this.api.data$.subscribe({
      next: (value) => console.log('next: ' + value),
      error: (error) => console.log('error: ' + error),
      complete: () => console.log('complete!'),
    });

    this.api.data$.next('my data $ $');
  }
}
