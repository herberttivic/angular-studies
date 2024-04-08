import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterComponent } from './getter.component';

describe('GetterComponent', () => {
  let component: GetterComponent;
  let fixture: ComponentFixture<GetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
