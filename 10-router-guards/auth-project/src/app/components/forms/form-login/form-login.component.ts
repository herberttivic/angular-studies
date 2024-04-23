import { Component, inject } from '@angular/core';
import { PrimaryInputComponent } from '../../ui/primary-input/primary-input.component';
import { PrimaryButtonComponent } from '../../ui/primary-button/primary-button.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [
    PrimaryInputComponent,
    PrimaryButtonComponent,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
  providers: [LoginService],
})
export class FormLoginComponent {
  private fb = new FormBuilder();
  private service = inject(LoginService);
  public error: string | null = null;
  public form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public handleSubmit() {
    this.error = null;
    const { email, password } = this.form.value;
    if (!email || !password) {
      this.error = 'Preencha todos os campos';
      return;
    }
    this.service.login({ email, password }).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        this.error = "Erro de servidor"
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
