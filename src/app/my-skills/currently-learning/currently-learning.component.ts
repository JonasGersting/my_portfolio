import { Component } from '@angular/core';
import { SetLanguageService } from '../../set-language.service';

@Component({
  selector: 'app-currently-learning',
  standalone: true,
  imports: [],
  templateUrl: './currently-learning.component.html',
  styleUrl: './currently-learning.component.scss'
})
export class CurrentlyLearningComponent {
  globalLanguage: string = 'DE';
  staticTexts = {
    "english":{
      "head": "What I am currently learning",
      "subHead": "I am currently learning",
      "motivation":"Svelte is a modern, powerful framework that offers simplicity while ensuring high performance. It allows me to write efficient code and helps me take my frontend skills to the next level.",
      "motivation2": ["Svelte is a modern, powerful ", " framework that offers simplicity while ensuring high performance.", " It allows me to write efficient code ", " and helps me take my frontend ", " skills to the next level.", ""]
    },
    "german":{
      "head": "Was ich gerade lerne",
      "subHead": "Ich lerne gerade",
      "motivation":"Svelte ist ein modernes, leistungsstarkes Framework, das Einfachheit bietet und gleichzeitig hohe Leistung gewährleistet. Es ermöglicht mir, effizienten Code zu schreiben und hilft mir, meine Frontend-Fähigkeiten auf das nächste Level zu heben.",
      "motivation2": ["Svelte ist ein modernes Framework,", " das Einfachheit bietet und ", "hohe Leistung gewährleistet.", "Es ermöglicht mir, effizienten Code ", "zu schreiben und hilft mir, meine Fähigkeiten auf das nächste ", "Level zu heben."]

    }
  }
  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }
}
