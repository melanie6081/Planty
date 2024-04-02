import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantyappComponent } from './plantyapp.component';

describe('PlantyappComponent', () => {
  let component: PlantyappComponent;
  let fixture: ComponentFixture<PlantyappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantyappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantyappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
