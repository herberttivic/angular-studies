import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './driven-form.component.html',
  styleUrl: './driven-form.component.css',
})
export class DrivenFormComponent {
  public handleSubmit(form : NgForm) {
    console.log(form.value)
  }
}
