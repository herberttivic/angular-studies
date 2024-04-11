import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { CustomValidatorsComponent } from './components/custom-validators/custom-validators.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormArrayComponent, FormBuilderComponent, CustomValidatorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
