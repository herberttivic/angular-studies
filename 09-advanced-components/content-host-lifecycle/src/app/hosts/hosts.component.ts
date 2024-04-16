import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hosts',
  standalone: true,
  imports: [],
  templateUrl: './hosts.component.html',
  styleUrl: './hosts.component.css',
  // HOST APLICA PROPRIEDADES PARA O COMPONENTE (NÃO PARA SEU CONTEÚDO)
  // host: {
  //   role: 'botão',
  //   '[attr.class]': 'minha_class',
  //   '(document.keypress)': 'handleKeyPress($event)',
  //   "(click)": "handleClick()"
  // },
})
export class HostsComponent {
  @HostBinding('attr.class')
  public minha_class = 'button';

  @HostListener('document.keypress')
  public handleKeyPress(e: KeyboardEvent) {
    console.log(e);
  }

  @HostListener('click')
  public handleClick() {
    alert('hosts working!');
  }
}
