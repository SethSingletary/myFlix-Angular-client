import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDialogComponentComponent } from './movie-dialog-component.component';

describe('MovieDialogComponentComponent', () => {
  let component: MovieDialogComponentComponent;
  let fixture: ComponentFixture<MovieDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDialogComponentComponent]
    });
    fixture = TestBed.createComponent(MovieDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
