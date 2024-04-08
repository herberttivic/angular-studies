import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetterComponent } from './components/getter/getter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
