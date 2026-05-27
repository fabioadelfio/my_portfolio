import { Injectable } from '@angular/core';
import { Project } from '../../shared/models/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce videogiochi',
      description: 'Full stack project',
      image: 'assets/images/game.jpg',
      technologies: ['Angular', 'Node', 'MySQL'],
      github: '',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
