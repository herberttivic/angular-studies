import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { NewComponentComponent } from '../new-component/new-component.component';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [NewComponentComponent],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent implements OnInit{

  // também é possível injetar a dependência usando o => private api = inject(ApiService);

  constructor(private readonly api: ApiService) {}
  title = 'services';

  ngOnInit(): void {
    console.log(this.api.data())
    this.api.data$.subscribe({
      next: (value) => console.log('next: ' + value),
      error: (error) => console.log('error: ' + error),
      complete: () => console.log('complete!'),
    });

  }
}
