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
      description1: 'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen zu finden und spannende Kämpfe gegen das riesige Huhn zu bestreiten.',
      duration: '3 Wochen',
      headline2: 'Wie ich den Prozess strukturiert habe',
      description2: 'Für dieses Projekt habe ich jeden Teil des Spiels in separate Klassen und Methoden strukturiert. Jede Klasse hat unterschiedliche Parent-Klassen, sodass sie verschiedene Eigenschaften erbt.',
      headline3: 'Was ich gelernt habe',
      description3: 'In diesem Projekt hatte ich die Möglichkeit, OOP zu erkunden, was eine bereichernde Erfahrung war. Im Verlauf von 5 Wochen lag der Schwerpunkt darauf, HTML Canvas zu nutzen und miteinander verbundene Klassen zu implementieren, um dynamische Gameplay-Mechaniken zu erstellen. Dieses Projekt hat meine Kenntnisse in JavaScript erheblich gestärkt.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/elPolloLocoScreenshot.PNG'
    },
    {
      title: 'Join',
      headline1: 'Über das Projekt',
      description1: 'Diese App ist ein Taskmanager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mithilfe von Drag-and-Drop-Funktionen und weise Benutzer und Kategorien zu.',
      duration: '3 Weeks',
      headline2: 'Wie ich den Prozess strukturiert habe',
      description2: 'Für dieses Projekt waren wir eine Gruppe von drei Personen. Wir haben ein Kanban-System verwendet, um unsere Arbeit zu organisieren. Jeder war für unterschiedliche Teile des Projekts verantwortlich, wodurch wir schnelle Ergebnisse erzielen konnten und jeder sich auf seinen eigenen Bereich konzentrieren konnte. In regelmäßigen Abständen haben wir überprüft, ob unsere Komponenten miteinander harmoniere, um Fehler schnell ausfindig zu machen und zu beheben.',
      headline3: 'Meine Erfahrung',
      description3: 'Als Teil eines 3-köpfigen Teams in einem 5-wöchigen Projekt war meine Hauptaufgabe die Implementierung des Dashboards sowie des gesamten Kontaktbereichs. Die Arbeit in der Gruppe lehrte mich die Bedeutung klarer Kommunikation, effektiver Aufgabenverteilung und regelmäßiger Zusammenarbeit, um sicherzustellen, dass alle Komponenten nahtlos integriert werden. Zudem habe ich wertvolle Einblicke darin gewonnen, wie man Konflikte bewältigt, konstruktives Feedback gibt und sich an unterschiedliche Arbeitsstile innerhalb eines Teams anpasst.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png', './../../assets/img/Firebase.png'],
      img: './../../assets/img/join.png'
    },
    {
      title: 'Ring of Fire',
      headline1: 'Über das Projekt',
      description1: 'Ring of Fire ist eine digitale Adaption des beliebten kartenbasierten Trinkspiels. Entwickelt für Gruppen von Freunden bietet das Spiel ein unterhaltsames und spannendes Erlebnis, bei dem die Spieler Karten ziehen und die einzigartigen Regeln oder Herausforderungen befolgen, die jeder Karte zugeordnet sind.',
      duration: '3 Weeks',
      headline2: 'Wie ich den Prozess strukturiert habe',
      description2: 'For this project, I divided the application into reusable components and services within Angular. Each part of the game, such as the card deck, players, and rule logic, was handled separately to maintain clarity and scalability. The game data, including player information and card statuses, is stored in Firebase, enabling real-time synchronization between players.',
      headline3: 'Was ich gelernt habe',
      description3: 'Dieses Projekt gab mir wertvolle Einblicke in die Full-Stack-Webentwicklung und führte mich an zentrale Konzepte wie das Angular Framework, die Firebase-Integration, komponentenbasierte Gestaltung und User Experience Design heran.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Angular.png', './../../assets/img/Firebase.png'],
      img: './../../assets/img/ringOfFire.PNG'
    },
    {
      title: 'Pokedex',
      headline1: 'Über das Projekt',
      description1: 'Pokédex ist eine Webanwendung, die es Benutzern ermöglicht, detaillierte Informationen über Pokémon zu erkunden. Die App ruft Daten von der offiziellen Pokémon-API ab, um Statistiken, Fähigkeiten und Entwicklungsketten für jedes Pokémon anzuzeigen.',
      duration: '3 Weeks',
      headline2: 'Wie ich den Prozess strukturiert habe',
      description2: 'Für dieses Projekt strukturierte ich den Code in modulare und wiederverwendbare Funktionen, um verschiedene Aspekte der Anwendung zu handhaben, wie das Abrufen von Daten von der Pokémon-API, das Rendern von Pokémon-Details und das Anzeigen ihrer Evolutionsketten.',
      headline3: 'Was ich gelernt habe',
      description3: 'Dieses Projekt bot eine hervorragende Gelegenheit, mein Verständnis für Webentwicklung und die Arbeit mit externen APIs zu vertiefen. Wichtige Erkenntnisse beinhalten: Arbeiten mit APIs, dynamische DOM-Manipulation, responsives Design.',
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
      description2: 'For this porject I structured every part of the game in seperat classes and methods. Every class has different parent classes so that it inherits different characteristics.',
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
      description2: 'For this project we were a group of three people. We used another Kanban System to organize our work. Everyone was responsible for different parts of the project so we got fast results and everybody could focus on his own part. At regular intervals we checked if our components work together to solve errors quicky.',
      headline3: 'My group work experience',
      description3: 'As part of a 3-person team in a 5-week project, my primary role involved implementing the dashboard as well as the whole contact section. Working in a group taught me the importance of clear communication, task delegation, and regular collaboration to ensure all components integrate seamlessly. I also gained valuable insights into how to manage conflicts, provide constructive feedback, and adapt to different working styles within a team.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png', './../../assets/img/Firebase.png'],
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
      description3: `This project gave me valuable insights into full-stack web development and introduced me to key concepts such as Angular Framework, Firebase Integration, Component-Based Design, User Experience Design.`,
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Angular.png', './../../assets/img/Firebase.png'],
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
      description3: 'This project offered an excellent opportunity to deepen my understanding of web development and working with external APIs. Key takeaways include: Working with APIs, Dynamic DOM Manipulation, Responsive Design.',
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
