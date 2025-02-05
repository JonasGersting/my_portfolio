import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SetLanguageService } from './../set-language.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.scss']
})
export class WhyMeComponent {

  globalLanguage: string = 'DE';
  staticTexts = {
    "english":{
      "headline": "Why me",
      "motivation": "I am motivated to continuously learn new technologies and develop myself. My ability to solve complex problems and my passion for programming make me a valuable member for your team.",
      "contact": "Let's talk"
    },
    "german": {
        "headline": "Warum ich",
        "motivation": "Ich bin motiviert, ständig neue Technologien zu lernen und mich weiterzuentwickeln. Meine Fähigkeit, komplexe Probleme zu lösen, und meine Leidenschaft für Programmierung machen mich zu einem wertvollen Mitglied für Ihr Team.",
        "contact": "Jetzt anfragen"
    }
  }
  texts =
    {
      "english": [
        { "icon": "assets/img/location.png", "prefix": "I am ", "text": "located in Offenbach", "end": "...", "cursor": "|" },
        { "icon": "assets/img/remote.png", "prefix": "I am ", "text": "open to work remote", "end": "...", "cursor": "|" },
        { "icon": "assets/img/relocate.png", "prefix": "I am ", "text": "open to relocate", "end": "...", "cursor": "|" }
      ],
      "german": [
        { "icon": "assets/img/location.png", "prefix": "Ich komme ", "text": "aus Offenbach", "end": "...", "cursor": "|" },
        { "icon": "assets/img/remote.png", "prefix": "Ich bin ", "text": "bereit, remote zu arbeiten", "end": "...", "cursor": "|" },
        { "icon": "assets/img/relocate.png", "prefix": "Ich bin ", "text": "bereit, umzuziehen", "end": "...", "cursor": "|" }
      ]
    }



  transparent: string = 'transparent';
  isTransparent = true;
  currentIcon = '';
  prefixText = '';
  displayedText = '';
  endFix = '';
  cursor = '';
  currentIndex = 0;
  private typingSpeed = 100;
  private pauseTime = 2000;

  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }

  ngOnInit(): void {
    this.startTypingAnimation();
  }

  toggleTransparency(): void {
    let toggleCount = 0;
    const toggleInterval = setInterval(() => {
      if (toggleCount < 10) {
        this.isTransparent = !this.isTransparent;
        toggleCount++;
      } else {
        clearInterval(toggleInterval);
      }
    }, 400);
  }

  returnCorrectLang() {
    let selectetLangTexts;
    if (this.globalLanguage === 'DE') {
      return selectetLangTexts = this.texts.german;
    } else {
      return selectetLangTexts = this.texts.english;
    }
  }

  startTypingAnimation(): void {
    let selectetLangTexts = this.returnCorrectLang();
    this.currentIcon = selectetLangTexts[this.currentIndex].icon;
    this.resetTextFields();
    this.typeIcon(() => {
      this.typePrefixAndText(selectetLangTexts[this.currentIndex].prefix, selectetLangTexts[this.currentIndex].text, () => {
        this.updateEndFixAndCursor();
        this.toggleTransparency();
        setTimeout(() => this.deleteText(() => this.switchToNextText()), this.pauseTime);
      });
    });
  }

  resetTextFields(): void {
    this.prefixText = '';
    this.displayedText = '';
    this.endFix = '';
  }

  typeIcon(callback: () => void): void {
    let selectetLangTexts = this.returnCorrectLang();
    this.currentIcon = selectetLangTexts[this.currentIndex].icon;
    setTimeout(callback, this.typingSpeed);
  }

  typePrefixAndText(prefix: string, text: string, callback: () => void): void {
    let prefixIndex = 0;
    let textIndex = 0;
    const typeInterval = setInterval(() => {
      if (prefixIndex < prefix.length) {
        this.prefixText += prefix[prefixIndex];
        prefixIndex++;
      } else if (textIndex < text.length) {
        this.displayedText += text[textIndex];
        textIndex++;
      } else {
        clearInterval(typeInterval);
        callback();
      }
    }, this.typingSpeed);
  }

  updateEndFixAndCursor(): void {
    let selectetLangTexts = this.returnCorrectLang();
    this.endFix = selectetLangTexts[this.currentIndex].end;
    this.cursor = selectetLangTexts[this.currentIndex].cursor;
  }

  deleteText(callback: () => void): void {
    const interval = setInterval(() => {
      if (this.cursor.length > 0) {
        this.cursor = '';
      } else if (this.endFix.length > 0) {
        this.endFix = '';
      } else if (this.displayedText.length > 0) {
        this.displayedText = this.displayedText.slice(0, -1);
      } else if (this.prefixText.length > 0) {
        this.prefixText = this.prefixText.slice(0, -1);
      } else {
        clearInterval(interval);
        callback();
      }
    }, this.typingSpeed);
  }

  switchToNextText(): void {
    let selectetLangTexts = this.returnCorrectLang();
    this.currentIndex = (this.currentIndex + 1) % selectetLangTexts.length;
    this.currentIcon = '';

    this.startTypingAnimation();

  }
}
