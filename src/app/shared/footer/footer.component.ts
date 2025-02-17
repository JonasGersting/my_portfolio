import { Component } from '@angular/core';
import { SetLanguageService } from '../../set-language.service';
import { Router } from '@angular/router';

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

  constructor(private languageService: SetLanguageService, private router: Router) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }

  showImprint(){
    this.router.navigateByUrl('imprint');
  }
}
