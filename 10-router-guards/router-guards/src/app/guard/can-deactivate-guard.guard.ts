import { CanDeactivateFn } from '@angular/router';
import { ServicosComponent } from '../pages/servicos/servicos.component';

export const canDeactivateGuardGuard: CanDeactivateFn<ServicosComponent> = (component, currentRoute, currentState, nextState) => {
  // é ativado quando você tenta sair da rota
  // a tipagem genérica é o tipo do componente, pois geralmente um canDeactivate é feito para cada rota
  // não funciona muito bem com o histórico (clicando no botão de voltar do navegador)
  console.log(component, currentRoute, currentState, nextState)

  if(!component.form.valid){
    alert("preencha o formulário")
    return false
  }
  return true;
};
