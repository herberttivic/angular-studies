import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  standalone: true,
  imports: [],
  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.css'
})
export class NgContentComponent implements OnInit{
  @ContentChild("header") header !: ElementRef;

  ngOnInit(): void {
      console.log(this.header)
  }
}
