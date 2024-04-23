import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../../ui/primary-button/primary-button.component';
import { PrimaryInputComponent } from '../../ui/primary-input/primary-input.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SigninService } from '../../../services/signin/signin.service';
interface IBody {
  name: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [PrimaryButtonComponent, PrimaryInputComponent, ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
})
export class FormRegisterComponent {
  private fb = new FormBuilder();
  private service = inject(SigninService);
  public error: string | null = null;
  public form = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });

  handleSubmit() {
    this.error = null
    const body = this.validate(this.form.value);
    if (body) {
      const { email, name, password } = body;
      this.service.signin({ email, name, password }).subscribe({
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

  validate(form: typeof this.form.value): false | IBody {
    if (!form.name) {
      this.error = 'Preencha o campo nome';
      return false;
    }
    if (!form.email) {
      this.error = 'Preencha o campo email';
      return false;
    }
    if (!form.password) {
      this.error = 'Preencha o campo senha';
      return false;
    }
    if (!form.confirmPassword) {
      this.error = 'Preencha o campo confirmação de senha';
      return false;
    }
    if (form.confirmPassword !== form.password) {
      this.error = 'As senhas não são iguais';
      return false;
    }
    return {
      name : form.email,
      email : form.name,
      password : form.password,
    };
  }
}
