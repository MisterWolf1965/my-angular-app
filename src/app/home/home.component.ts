// Example: src/app/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {RouterOutlet} from '@angular/router'; // Important for standalone components using common Angular directives

@Component({
  selector: 'app-home', // Make sure the selector is unique for each component (e.g., app-home, app-about)
  standalone: true,     // This must be set to true for standalone components
  imports: [CommonModule, MatButton, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, RouterOutlet], // Include CommonModule if you use directives like *ngIf, *ngFor in your template
  templateUrl: './home.html', // This should point to your .html file (e.g., home.html)
  styleUrl: './home.css'      // This should point to your .css file (e.g., home.css)
})
// Ensure the class name matches the imported name (e.g., HomeComponent for home.component.ts)
// And crucially, ensure it is EXPORTED
export class HomeComponent {
  // Any component-specific logic or properties go here
}
