import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-learning-inputs',
  standalone: true,
  imports: [],
  templateUrl: './learning-inputs.component.html',
  styleUrl: './learning-inputs.component.css',
})
export class LearningInputsComponent {
  name = signal('');
  @Input() set inputName(value: string) {
    this.name.set(value);
  }
  @Input() simpleName: string = '';
}
