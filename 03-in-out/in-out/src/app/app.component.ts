import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearningInputsComponent } from './components/learning-inputs/learning-inputs.component';
import { LearningOutputsComponent } from './components/learning-outputs/learning-outputs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LearningInputsComponent, LearningOutputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  myName = signal('Herbert Duarte Santos');
  alerta(e : string){
    window.alert(e)
  }
}
