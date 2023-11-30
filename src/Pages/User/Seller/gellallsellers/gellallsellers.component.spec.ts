import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GellallsellersComponent } from './gellallsellers.component';

describe('GellallsellersComponent', () => {
  let component: GellallsellersComponent;
  let fixture: ComponentFixture<GellallsellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GellallsellersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GellallsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
