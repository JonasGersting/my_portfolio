import { Component } from '@angular/core';
import { SetLanguageService } from './../set-language.service';


@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {
  globalLanguage: string = 'DE';
  headline = {
    english: 'Looking for seomeone versatile?',
    german: 'Sie suchen Vielseitigkeit?'
  }
  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }
  presentation: any =
  {
    english:[
      {
        title: 'Collaborative',
        text: 'I excel in team environments, as demonstrated during a Kanban project named "Join," where I collaborated closely with two colleagues. Effective communication and coordination were key to our success.',
        img:'assets/img/group.png'
      },
      {
        title: 'Independent',
        text: 'I thrive working independently, proven by my development of a document and data visualization tool at work. This self-initiated project is now actively used, showcasing my ability to take initiative and deliver.',
        img:'assets/img/rocket.png'
      },
      {
        title: 'Adaptable',
        text: 'I adapt seamlessly to any situation, combining teamwork and independence. Whether collaborating or working solo, I adjust to meet the needs of the project efficiently.',
        img:'assets/img/scale.png'
      }
    ],
    german: [
      {
        title: "Team-Work",
        text: "Kommunikation ist das A und O, wie bei meinem Kanban-Projekt Join. Gemeinsam mit zwei Kollegen haben wir Aufgaben abgestimmt und Lösungen erarbeitet. Unsere enge Zusammenarbeit und Kommunikation führten zum Erfolg des Projekts.",
        img: "assets/img/group.png"
      },
      {
        title: "Unabhängig",
        text: "Sie brauchen jemanden, der alleine arbeiten kann? Ich habe auf meiner Arbeit ein eigenes Datenvisualisierungstool entwickelt. Dieses wird nun aktiv genutzt und zeigt meine Fähigkeit, Initiative zu ergreifen und Ergebnisse zu liefern.",
        img: "assets/img/rocket.png"
      },
      {
        title: "Anpassungsfähig",
        text: "Ich bin flexibel und passe mich je nach Situation an. Ob im Team oder alleine, ich finde immer den richtigen Ansatz, um effizient zu arbeiten und die besten Ergebnisse zu erzielen.",
        img: "assets/img/scale.png"
      }
    ]
    
  }

}
