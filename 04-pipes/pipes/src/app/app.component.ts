import {
  DatePipe,
  DecimalPipe,
  CurrencyPipe,
  UpperCasePipe,
  LowerCasePipe,
  PercentPipe,
  registerLocaleData,
  JsonPipe,
} from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import pt from "@angular/common/locales/pt"
import { CustomStringPipe } from './pipes/custom-string.pipe';
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
    CustomStringPipe,
    JsonPipe
  ],
  providers: [{provide : LOCALE_ID, useValue: "pt-BR"}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  date = new Date()
  text = "Herbert"
}
