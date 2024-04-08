import { Component } from '@angular/core';
import { GetterService } from './getter.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'getter',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [GetterService],
  templateUrl: './getter.component.html',
  styleUrl: './getter.component.css',
})
export class GetterComponent {
  constructor(private readonly getterService: GetterService) {}
  public data: any = { message: 'Nenhum dado buscado' };
  public isLoading = false;
  public arr = ["herbert", "maria", "joão"]
  public form = new FormGroup({
    id: new FormControl<string>('', Validators.min(1)),
  });

  async getData(): Promise<void> {
    this.isLoading = true
    if (this.form.value.id) {
      try {
        const data = await lastValueFrom(
          this.getterService.fetchData(this.form.value.id)
        );
        this.data = data
      } catch (error) {
        if(error instanceof HttpErrorResponse){
          console.log(error)
          this.data  = error.message
        }else{
          this.data = "unknown error"
        }
      }
    }
    this.isLoading = false

  }

  parse(content: any) {
    return JSON.stringify(content);
  }
}
