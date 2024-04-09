import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningOutputsComponent } from './learning-outputs.component';

describe('LearningOutputsComponent', () => {
  let component: LearningOutputsComponent;
  let fixture: ComponentFixture<LearningOutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningOutputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
