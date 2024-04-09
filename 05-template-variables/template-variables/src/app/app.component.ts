import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from './components/teste/teste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myInput') input!: ElementRef;
  @ViewChild('myDiv') div!: ElementRef;
  @ViewChild(TesteComponent) teste!: TesteComponent;
  valueOfTestComponent = signal('');

  ngAfterViewInit(): void {
    console.log(this.input.nativeElement);
    console.log(this.div.nativeElement);
    console.log(this.teste.value);
    this.valueOfTestComponent.set(this.teste.value);
  }
}
