import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrivenFormComponent } from './components/driven-form/driven-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrivenFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven-forms';
}
