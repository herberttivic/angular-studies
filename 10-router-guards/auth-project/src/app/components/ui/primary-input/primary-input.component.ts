import { Component, Input, forwardRef } from '@angular/core';
import {  ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.css',
  providers : [
    {
      provide : NG_VALUE_ACCESSOR,
      useExisting : forwardRef(()=>PrimaryInputComponent),
      multi: true
    }
  ]
})
export class PrimaryInputComponent implements ControlValueAccessor{

  @Input("id") id !: string;
  @Input("label") label !: string;
  @Input("placeholder") placeholder !: string;
  @Input("type") type: string = "text";
  @Input("controller") controller !: string | null | undefined


  value = ""
  onChange = (value: string) => {}
  onTouched = () => {}
  onInput = (e : Event) =>{
    const value = (e.target  as HTMLInputElement).value
    this.onChange(value);
  }

  writeValue(value: any): void {
      this.value = value;
  }

  registerOnChange(fn: any): void {
      this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {

  }
}
