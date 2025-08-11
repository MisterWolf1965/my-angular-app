import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

// Import your standalone components so they can be used in routes
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { TreeComponent } from './tree/tree.component'; // <--- This path is now correct

// Define the routes for your application. Each route maps a path to a component.
// This is the SINGLE and CORRECT declaration of the 'routes' array.
const routes: Routes = [
  // This route redirects the base URL ('') to the '/home' path.
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Specific routes for each of your pages, linking them to their respective components.
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'tree', component: TreeComponent },
  // This is a wildcard route that catches any undefined paths and redirects them to '/home'.
  { path: '**', redirectTo: '/home' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    // Providers for global error handling and change detection
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    // 'provideRouter' registers the Angular router with the application,
    // making it available for navigation and linking.
    provideRouter(routes)
  ]
};
