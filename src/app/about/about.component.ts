import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  features = [
    {
      title: 'Modern Angular',
      description: 'Built with Angular 19 using the latest features including signals, standalone components, and modern syntax.',
      icon: '⚡'
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive design that works perfectly on desktop, tablet, and mobile devices.',
      icon: '📱'
    },
    {
      title: 'Local Storage',
      description: 'Your todos are automatically saved to local storage, so you never lose your progress.',
      icon: '💾'
    },
    {
      title: 'Search & Filter',
      description: 'Easily search through your todos and filter by completion status.',
      icon: '🔍'
    },
    {
      title: 'Real-time Updates',
      description: 'Instant updates with smooth animations and transitions for a great user experience.',
      icon: '🔄'
    },
    {
      title: 'Offline Support',
      description: 'Works offline with cached data, ensuring you can always access your todos.',
      icon: '🌐'
    }
  ];
} 