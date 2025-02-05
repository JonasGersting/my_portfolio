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
      "motivation":"Staying motivated to expand my IT skills requires a strategic approach, a curious mindset, and a commitment to lifelong learning.",
      "motivation2": ["Staying motivated to expand my IT", " skills requires a strategic approach, a", " curious mindset, and a commitment ", " to lifelong learning."]
    },
    "german":{
      "head": "Was ich gerade lerne",
      "subHead": "Ich lerne gerade",
      "motivation":"Motiviert zu bleiben und meine IT-Skills zu erweitern, erfordert Strategie, Neugier und die Verpflichtung zum lebenslangen Lernen.",
      "motivation2": ["Motiviert zu bleiben und meine IT-Skills", "zu erweitern, erfordert Strategie,", "Neugier und die Verpflichtung", "zum lebenslangen Lernen."]

    }
  }
  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }
}
