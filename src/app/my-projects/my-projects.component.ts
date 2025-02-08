import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { SetLanguageService } from './../set-language.service';


@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent, ProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  globalLanguage: string = 'DE';
  staticTexts = {
    english: {
      headline: 'My Projects',
      project: 'Project'
    },
    german: {
      headline: 'Meine Projekte',
      project: 'Projekt'
    }
  }
  activeButton: any = 0;
  triggerAnimation: boolean = false;
  showTitle: boolean = window.innerWidth > 1200;
  projectsGerman: any = [
    {
      title: 'El pollo Loco',
      headline1: 'Über das Projekt',
      description1: 'Es handelt sich um ein einfaches Jump and Run Spielm bei dem man gegen mehrere Gegner antritt und Münzen einsammeln kann.',
      duration: '3 Wochen',
      headline2: 'Wie ich meine Arbeite strukturiert habe',
      description2: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.',
      headline3: 'Meine Erfahrung',
      description3: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/elPolloLocoScreenshot.PNG'
    },
    {
      title: 'Join',
      headline1: 'Über das Projekt',
      description1: 'A spicy chicken restaurant app',
      duration: '3 Weeks',
      headline2: 'How I have organised my work',
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png', './../../assets/img/Firebase.png'],
      img: './../../assets/img/join.png'
    },
    {
      title: 'Ring of Fire',
      headline1: 'Über das Projekt',
      description1: 'A spicy chicken restaurant app',
      duration: '3 Weeks',
      headline2: 'How I have organised my work',
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Angular.png', './../../assets/img/Firebase.png'],
      img: './../../assets/img/ringOfFire.PNG'
    },
    {
      title: 'Pokedex',
      headline1: 'Über das Projekt',
      description1: 'A spicy chicken restaurant app',
      duration: '3 Weeks',
      headline2: 'How I have organised my work',
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png', './../../assets/img/Api.png'],
      img: './../../assets/img/pokedexScreenshot.PNG'
    },

  ];

  projectsEnglish: any = [
    {
      title: 'El pollo Loco',
      headline1: 'About the project',
      description1: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and exciting battles to fight against the giant Chicken.',
      duration: '5 Weeks',
      headline2: 'How I have organised my work',
      description2: 'For this porject I structured every part of the game in seperat classes and methods. Every class has different parent classes so that it inherits different characteristics. ',
      headline3: 'What I have learnt',
      description3: 'In this project, I had the opportunity to explore OOP, which was a rewarding experience. Over th span of 5 weeks, the main emphasis was on utilizing HTML Canvas and implementing interconnected classes to cdreate dynamic gameplay mechanis. This project significantly strengthened my proficiency in JacaScript.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/elPolloLocoScreenshot.PNG'
    },
    {
      title: 'Join',
      headline1: 'About the project',
      description1: 'This App is a task manager inspired by th Kanban System. Create and organize tasks using drag and drop functions, asign users and categories.',
      duration: '5 Weeks',
      headline2: 'How I have organised my work',
      description2: 'For this project we were a group of three people. We used another Kanban System to organize our work. Everyone was responsible for different parts of the project so we got fast results and everybody could focus on his own part. At regular intervals we checked if our components work together to solve errors quicky. ',
      headline3: ' My group work experience',
      description3: 'As part of a 3-person team in a 5-week project, my primary role involved implementing the dashboard as well as the whole contact section.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/join.png'
    },
    {
      title: 'Ring of Fire',
      headline1: 'About the project',
      description1: 'Ring of Fire is a digital adaptation of the popular card-based drinking game. Designed for groups of friends, the game offers an engaging and fun experience as players draw cards and follow unique rules or challenges associated with each card.',
      duration: '3 Weeks',
      headline2: 'How I have organised my work',
      description2: 'For this project, I divided the application into reusable components and services within Angular. Each part of the game, such as the card deck, players, and rule logic, was handled separately to maintain clarity and scalability. The game data, including player information and card statuses, is stored in Firebase, enabling real-time synchronization between players.',
      headline3: 'What I have learnt',
      description3: `This project gave me valuable insights into full-stack web development and introduced me to key concepts such as Angular Framework, Firebase Integration, Component-Based Design, User Experience Design`,
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/ringOfFire.PNG'
    },
    {
      title: 'Pokedex',
      headline1: 'About the project',
      description1: 'Pokédex is a web application that allows users to explore detailed information about Pokémon. The app fetches data from the official Pokémon API to display stats, abilities, and evolution chains for each Pokémon.',
      duration: '3 Weeks',
      headline2: 'How I have organised my work',
      description2: 'For this project, I structured the code into modular and reusable functions to handle different aspects of the application, such as fetching data from the Pokémon API, rendering Pokémon details, and displaying their evolution chains.',
      headline3: 'What I have learnt',
      description3: 'This project offered an excellent opportunity to deepen my understanding of web development and working with external APIs. Key takeaways include: Working with APIs, Dynamic DOM Manipulation, Responsive Design. Through this project, I not only improved my skills in JavaScript and CSS but also gained valuable experience in integrating APIs and building user-friendly interfaces for dynamic web applications.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png', './../../assets/img/Api.png'],
      img: './../../assets/img/pokedexScreenshot.PNG'
    },

  ];
  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.showTitle = window.innerWidth > 900;
  }

  activateBtn(position: number) {
    this.triggerAnimation = false;
    setTimeout(() => {
      this.activeButton = position;
      this.triggerAnimation = true;
    }, 50);
  }
}
