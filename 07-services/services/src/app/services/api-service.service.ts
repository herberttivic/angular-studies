import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  data = signal('my data');
  data$ = new BehaviorSubject('my data $');

  fetch() {
    console.log('fetch data');
  }
}
