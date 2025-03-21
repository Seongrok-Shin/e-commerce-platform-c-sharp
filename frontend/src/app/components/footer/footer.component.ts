import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octMarkGithub } from '@ng-icons/octicons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIcon,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterLink,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders: [provideIcons({ octMarkGithub })],
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {} // Inject Router

  ngOnInit(): void {}
  portfolio(): void {
    window.open('https://markshin.me/', '_blank');
  }
  github(): void {
    window.open('https://github.com/Seongrok-Shin/', '_blank');
  }
  currentYear: number = new Date().getFullYear();
}
