import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-learning-outputs',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './learning-outputs.component.html',
  styleUrl: './learning-outputs.component.css',
})
export class LearningOutputsComponent {
  form = new FormGroup({
    message: new FormControl(''),
  });

  @Output() outputMessage = new EventEmitter<string>();

  sendMessage() {
    this.outputMessage.emit(this.form.value.message as string);
  }
}
