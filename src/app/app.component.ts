import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { FeaturesComponent } from './components/features/features.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { PricingComponent } from './components/pricing/pricing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    UniversitiesComponent,
    FeaturesComponent,
    CoursesComponent,
    TestimonialsComponent,
    PricingComponent,
    FooterComponent
  ],
  standalone: true
})
export class AppComponent {
  title = 'ProjetAngular';
}
