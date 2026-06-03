import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  images: string[];
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent {
  project: Project | undefined;

  projects: Project[] = [
    {
      slug: 'boolstop',
      title: 'BoolStop',
      description: 'E-commerce completo per videogiochi con carrello, wishlist e checkout.',
      image: 'assets/projects/boolstop/cover.jpg',
      technologies: ['React', 'Node.js', 'MySQL'],
      github: '#',
      images: [
        'assets/projects/boolstop/home.jpg',
        'assets/projects/boolstop/catalog.jpg',
        'assets/projects/boolstop/cart.jpg',
        'assets/projects/boolstop/checkout.jpg',
      ],
    },
    {
      slug: 'boolflix',
      title: 'Boolflix',
      description: 'Catalogo film e serie TV con API TMDB.',
      image: 'assets/projects/boolflix/cover.jpg',
      technologies: ['React', 'API TMDB'],
      github: '#',
      images: [
        'assets/projects/boolflix/home.jpg',
        'assets/projects/boolflix/search.jpg',
        'assets/projects/boolflix/details.jpg',
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.project = this.projects.find((p) => p.slug === slug);
  }
}
