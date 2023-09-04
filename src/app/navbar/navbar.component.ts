import { Component } from '@angular/core';

/**
 * This compoent shows the navbar that is shown on each page. It allows users to go to their profile, home, or logout.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  logoutUser(): void{
    localStorage.clear();
    location.reload();
  }
}
