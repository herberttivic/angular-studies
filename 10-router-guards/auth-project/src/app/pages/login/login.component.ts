import { Component } from '@angular/core';
import { FormLoginComponent } from '../../components/forms/form-login/form-login.component';
import { FormRegisterComponent } from '../../components/forms/form-register/form-register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormLoginComponent, FormRegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogging = true;

  public changeForm(){
    this.isLogging = !this.isLogging
  }

  public getButtonText(){
    return this.isLogging ? "Não tenho uma conta" : "Já possuo cadastro"
  }

  public getTitle(){
    return this.isLogging ? "Login" : "Signin"

  }
}
