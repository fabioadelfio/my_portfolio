import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  images: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      slug: 'boolstop',
      title: 'BoolStop',
      description:
        'E-commerce full stack per la vendita di videogiochi, con gestione completa del carrello, wishlist e sistema di checkout con gestione degli ordini.',
      image: 'assets/projects/boolstop/cover.png',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'MySQL'],

      images: [
        'assets/projects/boolstop/cover.png',
        'assets/projects/boolstop/2.png',
        'assets/projects/boolstop/3.png',
        'assets/projects/boolstop/4.png',
        'assets/projects/boolstop/5.png',
        'assets/projects/boolstop/6.png',
        'assets/projects/boolstop/7.png',
        'assets/projects/boolstop/8.png',
        'assets/projects/boolstop/9.png',
        'assets/projects/boolstop/10.png',
        'assets/projects/boolstop/11.png',
        'assets/projects/boolstop/12.png',
        'assets/projects/boolstop/13.png',
        'assets/projects/boolstop/14.png',
        'assets/projects/boolstop/15.png',
        'assets/projects/boolstop/16.png',
        'assets/projects/boolstop/17.png',
        'assets/projects/boolstop/18.png',
        'assets/projects/boolstop/19.png',
        'assets/projects/boolstop/20.png',
        'assets/projects/boolstop/21.png',
        'assets/projects/boolstop/22.png',
        'assets/projects/boolstop/23.png',
        'assets/projects/boolstop/24.png',
      ],
    },
    {
      slug: 'cinemax_admin',
      title: 'Cinemax (Admin Panel)',
      description:
        'Admin panel per la gestione di una piattaforma di streaming, con funzionalità CRUD su film e serie TV e integrazione di API esterne per ricerca e sincronizzazione dei contenuti.',
      image: 'assets/projects/cinemax-admin/cover.png',
      technologies: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],

      images: [
        'assets/projects/cinemax-admin/cover.png',
        'assets/projects/cinemax-admin/2.png',
        'assets/projects/cinemax-admin/3.png',
        'assets/projects/cinemax-admin/4.png',
        'assets/projects/cinemax-admin/5.png',
        'assets/projects/cinemax-admin/6.png',
        'assets/projects/cinemax-admin/7.png',
        'assets/projects/cinemax-admin/8.png',
        'assets/projects/cinemax-admin/9.png',
        'assets/projects/cinemax-admin/10.png',
        'assets/projects/cinemax-admin/11.png',
        'assets/projects/cinemax-admin/12.png',
        'assets/projects/cinemax-admin/13.png',
        'assets/projects/cinemax-admin/14.png',
        'assets/projects/cinemax-admin/15.png',
        'assets/projects/cinemax-admin/16.png',
        'assets/projects/cinemax-admin/17.png',
      ],
    },
    {
      slug: 'cinemax_user',
      title: 'Cinemax (User Interface)',
      description:
        'User interface per la ricerca e consultazione di film e serie TV con integrazione API e visualizzazione dettagli avanzati.',
      image: 'assets/projects/cinemax-user/cover.png',
      technologies: ['React', 'Bootstrap', 'MySQL', 'CSS', 'JavaScript', 'HTML'],

      images: [
        'assets/projects/cinemax-user/cover.png',
        'assets/projects/cinemax-user/2.png',
        'assets/projects/cinemax-user/3.png',
        'assets/projects/cinemax-user/4.png',
        'assets/projects/cinemax-user/5.png',
        'assets/projects/cinemax-user/6.png',
        'assets/projects/cinemax-user/7.png',
        'assets/projects/cinemax-user/8.png',
        'assets/projects/cinemax-user/9.png',
        'assets/projects/cinemax-user/10.png',
        'assets/projects/cinemax-user/11.png',
        'assets/projects/cinemax-user/12.png',
        'assets/projects/cinemax-user/13.png',
        'assets/projects/cinemax-user/14.png',
        'assets/projects/cinemax-user/15.png',
        'assets/projects/cinemax-user/16.png',
      ],
    },
  ];
}
