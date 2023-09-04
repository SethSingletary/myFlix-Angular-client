import { Component, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
/**
 * The user type, says that the code can expect a username, password, email, and favorite movie.
 * One this has been recieved, it is passed into the User data which is shown on the screen. From there the user can submit the updated form to update their username.
 */
type User = { _id?: string, Username?: string, Password?: string, Email?: string, FavoriteMovies?: [] }

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  user: User = {};

  @Input() userData = { Username: '', Password: '', Email: ''}

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public router: Router

    ) {}

  ngOnInit(): void {
    const user = this.getUser()

    if(!user._id){
      this.router.navigate(['welcome']);
      return;
    }

    this.user = user
    this.userData = {
      Username: user.Username || '',
      Password: '',
      Email: user.Email || ''
    }
    
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
  updateUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((result) => {
      localStorage.setItem('user', JSON.stringify(result));
      this.user = result;
      this.snackBar.open('user updated!', 'OK',{
        duration: 2000
      })
    })
  }
}
