import {
  DatePipe,
  DecimalPipe,
  CurrencyPipe,
  UpperCasePipe,
  LowerCasePipe,
  PercentPipe,
  registerLocaleData,
} from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import pt from "@angular/common/locales/pt"
registerLocaleData(pt)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    UpperCasePipe,
    LowerCasePipe,
    PercentPipe,
  ],
  providers: [{provide : LOCALE_ID, useValue: "pt-BR"}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  date = new Date()
  text = "Herbert"
}
