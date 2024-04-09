import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningInputsComponent } from './learning-inputs.component';

describe('LearningInputsComponent', () => {
  let component: LearningInputsComponent;
  let fixture: ComponentFixture<LearningInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
