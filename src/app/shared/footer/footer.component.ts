import { Component } from '@angular/core';
import { SetLanguageService } from '../../set-language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  globalLanguage: string = 'DE';

  imprint = {
    english: 'Imprint',
    german: 'Impressum'
  }

  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }
}
