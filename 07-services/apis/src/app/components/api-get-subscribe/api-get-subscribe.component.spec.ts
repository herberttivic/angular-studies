import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGetSubscribeComponent } from './api-get-subscribe.component';

describe('ApiGetSubscribeComponent', () => {
  let component: ApiGetSubscribeComponent;
  let fixture: ComponentFixture<ApiGetSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiGetSubscribeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiGetSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
