import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userdashboardComponent } from './userdashboard.component';

describe('CustomerdashboardComponent', () => {
  let component: userdashboardComponent;
  let fixture: ComponentFixture<userdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [userdashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(userdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
