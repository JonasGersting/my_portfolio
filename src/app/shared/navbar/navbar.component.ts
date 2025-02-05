import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SetLanguageService } from '../../set-language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  globalLanguage: string = 'DE';
  selectedLink: string = '';
  menuOpen: boolean = false;

  language: any = {
    "english": {
      "whyMe": "Why me",
      "skills": "Skills",
      "projects": "Projects",
      "contact": "Contact"
    },
    "german": {
      "whyMe": "Warum mich",
      "skills": "Fähigkeiten",
      "projects": "Projekte",
      "contact": "Kontakt"
    }
  }
  

  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }

  setLanguage(lang: string): void {
    this.languageService.switchLanguage(lang);
  }

  setLink(link: string): void {
    this.selectedLink = link;
    this.closeMenu();
  }

  toggleRespMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.updateBodyScroll();
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.updateBodyScroll();
  }

  private updateBodyScroll(): void {
    if (this.menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
