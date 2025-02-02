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
  


  setLanguage(lang: string): void {
    this.selectedLang = lang;
  }

  setLink(link: string){
    this.selectedLink = link;
  }

}
