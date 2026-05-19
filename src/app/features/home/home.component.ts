import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  skills = [
    {
      name: 'Frontend',
      description: 'Angular, TypeScript, SCSS, Bootstrap'
    },
    {
      name: 'Backend',
      description: 'Node.js, Express'
    },
    {
      name: 'Database',
      description: 'MySQL, relational design'
    }
  ];

}