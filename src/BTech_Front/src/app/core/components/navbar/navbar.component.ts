import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string | null = null;
  menuOpen = false;
  showLogoutButton = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.userName$.subscribe(name => {
      this.userName = name;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.authService.logout();
  }

  toggleLogoutButton(show: boolean) {
    this.showLogoutButton = show;
  }
}
