import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FetchApiDataService } from "../fetch-api-data.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

/**
 * This component shows the login form, which will let the user login in with a passwword and username.
 * After it has been updated, it will navigate the user to the movies homepage.
 */

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: ''};

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit(): void {
  }

  loginUser(): void{
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      this.dialogRef.close();
      localStorage.setItem('token', result.token);
      console.log(result);

      localStorage.setItem('user', JSON.stringify(result.user));
      this.router.navigate(['movies']);
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }

}
