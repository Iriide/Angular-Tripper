import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedToursSummaryComponent } from './selected-tours-summary.component';

describe('SelectedToursSummaryComponent', () => {
  let component: SelectedToursSummaryComponent;
  let fixture: ComponentFixture<SelectedToursSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedToursSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedToursSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
