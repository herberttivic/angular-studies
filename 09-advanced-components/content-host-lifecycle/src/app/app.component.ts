import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgContentComponent } from './ng-content/ng-content.component';
import { HostsComponent } from './hosts/hosts.component';
import { LifeCyclesComponent } from './life-cycles/life-cycles.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgContentComponent,
    HostsComponent,
    LifeCyclesComponent,
    ChangeDetectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public myNumber = 1;
  public show = signal<boolean>(true);
  ngOnInit(): void {
    // const timer = setInterval(() => {
    //   this.myNumber++;
    //   clearInterval(timer);
    // }, 1000);
  }
}
