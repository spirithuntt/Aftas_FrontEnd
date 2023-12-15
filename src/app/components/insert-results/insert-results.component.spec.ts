import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertResultsComponent } from './insert-results.component';

describe('InsertResultsComponent', () => {
  let component: InsertResultsComponent;
  let fixture: ComponentFixture<InsertResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertResultsComponent]
    });
    fixture = TestBed.createComponent(InsertResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
