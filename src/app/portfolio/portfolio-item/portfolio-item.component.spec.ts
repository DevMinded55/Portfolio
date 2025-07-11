import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemComponent } from './portfolio-item.component';

describe('ProjectItemComponent', () => {
  let component: PortfolioItemComponent;
  let fixture: ComponentFixture<PortfolioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
