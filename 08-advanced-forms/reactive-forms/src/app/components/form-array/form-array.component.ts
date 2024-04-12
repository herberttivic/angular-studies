import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css',
})
export class FormArrayComponent {
  public form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    myKnowledges : new FormArray([])
  });

  public onSubmit(e: Event) {
    e.preventDefault();
    console.log('submit');
    if (this.form.valid) {
      window.alert(JSON.stringify(this.form.value));
    } else {
      window.alert('dados inválidos');
    }
  }

  public addKnowledge(knowledge : string){
    if(knowledge == ""){
      window.alert('dados inválidos');
      return
    }
    const myKnowledges = this.form.get("myKnowledges") as FormArray
    const newKnowledge = new FormControl(knowledge)

    myKnowledges.push(newKnowledge)
  }
}
