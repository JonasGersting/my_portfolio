import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  selectedLang: string = 'DE';
  selectedLink: string = '';
  menuOpen: boolean = false;

  setLanguage(lang: string): void {
    this.selectedLang = lang;
  }

  setLink(link: string): void {
    this.selectedLink = link;
    this.closeMenu(); // Menü schließen
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
