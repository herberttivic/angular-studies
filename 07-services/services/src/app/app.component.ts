import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api-service.service';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { OtherComponent } from './components/other/other.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OtherComponent],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
