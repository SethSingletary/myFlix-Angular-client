import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailDialogComponentComponent } from './movie-detail-dialog-component.component';

describe('MovieDetailDialogComponentComponent', () => {
  let component: MovieDetailDialogComponentComponent;
  let fixture: ComponentFixture<MovieDetailDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailDialogComponentComponent]
    });
    fixture = TestBed.createComponent(MovieDetailDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
