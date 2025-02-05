import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetLanguageService {

  private languageSubject = new BehaviorSubject<string>('EN');
  language$ = this.languageSubject.asObservable(); 

  switchLanguage(lang: string): void {
    this.languageSubject.next(lang);
  }

  get currentLanguage(): string {
    return this.languageSubject.getValue();
  }
}
