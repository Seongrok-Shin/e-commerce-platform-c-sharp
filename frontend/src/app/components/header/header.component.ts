import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    MatMenuModule,
    MatBadgeModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0; // Replace with actual cart item count from service

  constructor(private router: Router) {} // Inject Router

  ngOnInit(): void {}

  logout(): void {
    // Add your logout logic here, e.g., clear tokens, etc.
    console.log('Logout clicked');

    // For example, clearing a token from local storage:
    localStorage.removeItem('authToken');

    // Redirect to the login page:
    this.router.navigate(['/login']); // Use router.navigate
  }
}
