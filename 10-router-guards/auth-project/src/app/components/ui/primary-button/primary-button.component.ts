import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  @Input("type") type !: string;
  @Input("text") text : string = "Enviar";
  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit()
  }
}
