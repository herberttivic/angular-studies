import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { timer } from 'rxjs';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop"
@Component({
  selector: 'app-life-cycles',
  standalone: true,
  imports: [],
  templateUrl: './life-cycles.component.html',
  styleUrl: './life-cycles.component.css',
})
export class LifeCyclesComponent
  implements
    OnInit,
    OnChanges,
    // DoCheck,
    AfterViewInit,
    AfterContentInit,
    // AfterContentChecked,
    // AfterViewChecked,
    OnDestroy
{
  @Input('number') number!: number;
  @ContentChild('header') header!: ElementRef;
  constructor(private fb: FormBuilder) {
    console.log('1 - constructor');
  }

  private timer$ = timer(0, 1000).pipe(
    // faz o mesmo papel do unsubscribe no OnDestroy (mais atual)
    takeUntilDestroyed()
  ).subscribe({
    next: (value) => {
      console.log('next ', value);
    },
    error: (error) => {
      console.error(error);
    },
    complete: () => {
      console.log('completed');
    },
  });

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(
      '2 - changes acontence sempre que há mudanças no componente' +
        JSON.stringify(changes)
    );
  }

  ngOnInit(): void {
    console.log('3 - init (aqui ainda não temos acesso ao DOM)');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log(
      '4 - do check - acontece DEPOIS das mudanças no componente (inicialização, metodos, propriedades)'
    );
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(
      '5 - after content init (acontece depois que o conteúdo (DOM) do componente (ngContent) é carregado) => ' +
        this.header.nativeElement.innerText
    );
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log(
      '6- after content checked - acontece depois do do checked quando o content já foi carregado'
    );
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(
      '7 - acontece após a view do template do componente ser renderizada (aqui já temos acesso ao DOM)'
    );
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log(
      '8 - after view checked -  acontece depois do do checked quando a view já foi carregado'
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('%c9 - on destroy', 'color:red;');
    console.log('%ctimer stopped', 'color:red;');
    // this.timer$.unsubscribe()
  }
}
