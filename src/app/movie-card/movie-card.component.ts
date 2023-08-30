import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailDialogComponent } from '../movie-detail-dialog/movie-detail-dialog.component';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
    ) { }

ngOnInit(): void {


  const user = localStorage.getItem('user');

  if(!user){
    this.router.navigate(['welcome']);
  }

  this.getMovies();
}

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }
addFavorite(id: string): void {

  const token = localStorage.getItem('token');
  console.log(token);

  this.fetchApiData.addFavoriteMovie(id).subscribe(() => {
    this.snackBar.open('Added to favorites!', 'OK', {
      duration: 2000
    })
  })

}
removeFavorite(id: string): void {
  this.fetchApiData.deleteFavoriteMovie(id).subscribe(() => {
    this.snackBar.open('Removed from favorites!', 'OK', {
      duration: 2000
    })
  })
}
isFavorite(id: string): boolean {
  return this.fetchApiData.isFavoriteMovie(id)
}
openGenreDialog(genre: any): void {
  this.dialog.open(MovieDetailDialogComponent, {
    data: {
      title: genre,
      content: ''
    }
  })
}
openDirectorDialog(director: any): void {
  this.dialog.open(MovieDetailDialogComponent, {
    data: {
      title: director.Name,
      content: ''
    }
  })

}
openSynopsisDialog(synopsis: string): void {
}

}
