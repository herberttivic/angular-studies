import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiGetAsyncComponent } from './components/api-get-async/api-get-async.component';
import { ApiGetSignalComponent } from './components/api-get-signal/api-get-signal.component';
import { ApiGetSubscribeComponent } from './components/api-get-subscribe/api-get-subscribe.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ApiGetAsyncComponent,
    ApiGetSignalComponent,
    ApiGetSubscribeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
}
