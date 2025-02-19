import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SetLanguageService } from '../../set-language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  globalLanguage: string = 'DE';
  selectedLink: string = '';
  menuOpen: boolean = false;
  isMenuIconVisible: boolean = true; 
  private lastScrollPosition: number = 0;
  private scrollTimeout: any;

  language: any = {
    english: {
      whyMe: 'Why me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    german: {
      whyMe: 'Warum mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt'
    }
  };

  constructor(
    private languageService: SetLanguageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }

  ngOnInit(): void {
    this.setSelectedLinkFromFragment(window.location.hash);
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      this.setSelectedLinkFromFragment(fragment ? `#${fragment}` : '');
    });
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  setLanguage(lang: string): void {
    this.languageService.switchLanguage(lang);
  }

  setLink(link: string): void {
    const currentUrl = this.router.url.split('#')[0];
    const isOnMainPage = currentUrl === '/' || currentUrl === '';  
    if (isOnMainPage) {
      this.selectedLink = link;
      this.closeMenu();
    } else {
      this.router.navigateByUrl('');
      this.selectedLink = link;
      this.closeMenu();
    }
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

  private setSelectedLinkFromFragment(hash: string): void {
    const fragment = hash.replace('#', '');
    this.selectedLink = this.getLinkFromFragment(fragment);
  }

  private getLinkFromFragment(fragment: string): string {
    switch (fragment) {
      case 'why-me':
        return 'whyMe';
      case 'skills':
        return 'skills';
      case 'my-projects':
        return 'projects';
      case 'contact':
        return 'contact';
      default:
        return '';
    }
  }

  private handleScroll(): void {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition > this.lastScrollPosition) {
      this.isMenuIconVisible = false;
    } else {
      this.isMenuIconVisible = true;
    }
    this.lastScrollPosition = currentScrollPosition;
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.updateSelectedLinkBasedOnScroll();
    }, 100);
  }

  private updateSelectedLinkBasedOnScroll(): void {
    const sections = [
      { id: 'hero', link: '' },
      { id: 'why-me', link: 'whyMe' },
      { id: 'skills', link: 'skills' },
      { id: 'my-projects', link: 'projects' },
      { id: 'contact', link: 'contact' }
    ];
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.selectedLink = section.link;
          break;
        }
      }
    }
  }
}
