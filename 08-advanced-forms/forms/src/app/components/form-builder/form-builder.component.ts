import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
  private fb = new FormBuilder();

  public form = this.fb.group({
    username: [''],
    password: [''],
  });
}
