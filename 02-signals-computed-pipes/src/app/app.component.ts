import { Component, computed, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fisrtName = signal('Herbert');
  lastName = signal('Duarte');
  arr = signal<number[]>([1]);
  fullName = computed(() => {
    return this.fisrtName() + " "+  this.lastName();
  });

  constructor(){
    effect(()=>{

      console.log("array mudou: "+ this.arr())
    },)
  }

  updateName() {
    this.lastName.set('Duarte Santos');
  }

  updateArray() {
    this.arr.update((previusValue: number[]) => {
      return [...previusValue, previusValue.length + 1];
    });
  }
}
