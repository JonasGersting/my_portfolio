import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetLanguageService {

  private languageSubject = new BehaviorSubject<string>(localStorage.getItem('language') || 'EN');
  language$ = this.languageSubject.asObservable(); 

  switchLanguage(lang: string): void {
    localStorage.setItem('language', lang);
    this.languageSubject.next(lang);
  }

  get currentLanguage(): string {
    return this.languageSubject.getValue();
  }
}
