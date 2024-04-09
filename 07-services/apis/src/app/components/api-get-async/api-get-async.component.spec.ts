import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGetAsyncComponent } from './api-get-async.component';

describe('ApiGetAsyncComponent', () => {
  let component: ApiGetAsyncComponent;
  let fixture: ComponentFixture<ApiGetAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiGetAsyncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiGetAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
