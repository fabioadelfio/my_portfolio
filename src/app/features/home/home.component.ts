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

  name = "Fabio Adelfio";

  skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
    "VS Code",
    "PHP",
    "Laravel",
    "Bootstrap",
    "JQuery",
    "Database",
    "Angular",
    "TypeScript",
    "Node.js",
    "Express",
    "MySQL",
    "SCSS"
  ];

  projectsPreview = [
    {
      title: "E-commerce Videogiochi",
      desc: "Full stack app con carrello, sconti e checkout",
    },
    {
      title: "Catalogo Film",
      desc: "CRUD completo con Express e MySQL",
    }
  ];
}