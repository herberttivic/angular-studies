import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';

function hasUpperCase(): ValidatorFn {
  return (control: AbstractControl) => {
    console.log("bateu na validação")
    const regex = /[A-Z]/;
    const isValid = regex.test(control.value)
    if (isValid) {
      return null;
    }
    return { hasUpperCaseError: true };
  };
}

@Component({
  selector: 'app-custom-validators',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-validators.component.html',
  styleUrl: './custom-validators.component.css',
})
export class CustomValidatorsComponent {
  private fb = new FormBuilder();

  public form = this.fb.group({
    firstName: ['', [hasUpperCase()]],
    lastName: ['', [hasUpperCase()]],
  });
}
