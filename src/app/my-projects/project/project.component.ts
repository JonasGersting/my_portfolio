import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core'; 
import { SetLanguageService } from '../../set-language.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  globalLanguage: string = 'DE';
  duration = {
    english: 'Duration:',
    german: 'Dauer:'
  }
  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }
  @Input() project: any; 
}