import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit{

  ngOnInit(): void {
    
  }
}
