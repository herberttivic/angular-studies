import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGetSignalComponent } from './api-get-signal.component';

describe('ApiGetSignalComponent', () => {
  let component: ApiGetSignalComponent;
  let fixture: ComponentFixture<ApiGetSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiGetSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiGetSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
