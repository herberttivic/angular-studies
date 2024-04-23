import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {

  public form = new FormGroup({
    name : new FormControl("",[Validators.required])
  })
}
