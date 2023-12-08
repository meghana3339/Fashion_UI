import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbypriceComponent } from './productbyprice.component';

describe('ProductbypriceComponent', () => {
  let component: ProductbypriceComponent;
  let fixture: ComponentFixture<ProductbypriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductbypriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductbypriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
