import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * This will simply show what pops up when you click on the details button in the movie card
 */

@Component({
  selector: 'app-movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.scss']
})
export class MovieDetailDialogComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string,
      content: string,
    }
  ){}

  ngOnInit(): void {
    
  }

}
