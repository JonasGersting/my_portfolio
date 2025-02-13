import { Component } from '@angular/core';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { CurrentlyLearningComponent } from './currently-learning/currently-learning.component';
import { SetLanguageService } from './../set-language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [SkillSetComponent, CurrentlyLearningComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  globalLanguage: string = 'DE';
  headline = {
    "english": "My Skills",
    "german": "Meine Fähigkeiten"
  }

  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }
}
