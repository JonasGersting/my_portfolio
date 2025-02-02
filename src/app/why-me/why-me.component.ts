import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.scss']
})
export class WhyMeComponent {
  texts = [
    { icon: 'assets/img/location.png', prefix: 'I am ', text: 'located in Offenbach', end: '...', cursor: '|' },
    { icon: 'assets/img/remote.png', prefix: 'I am ', text: 'open to work remote', end: '...', cursor: '|' },
    { icon: 'assets/img/relocate.png', prefix: 'I am ', text: 'open to relocate', end: '...', cursor: '|' }
  ];

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

  startTypingAnimation(): void {
    this.currentIcon = this.texts[this.currentIndex].icon;
    this.resetTextFields();
    this.typeIcon(() => {
      this.typePrefixAndText(this.texts[this.currentIndex].prefix, this.texts[this.currentIndex].text, () => {
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
    this.currentIcon = this.texts[this.currentIndex].icon;
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
    this.endFix = this.texts[this.currentIndex].end;
    this.cursor = this.texts[this.currentIndex].cursor;
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
    this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    this.currentIcon = '';
    
      this.startTypingAnimation();
    
  }
}
