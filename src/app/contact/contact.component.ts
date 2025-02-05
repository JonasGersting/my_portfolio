import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SetLanguageService } from './../set-language.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  globalLanguage: string = 'DE';
  staticTexts = {
    english:{
      headline:'Contact me',
      text:'Are you still not sure whether I am the right person for you? Write me a message and see for yourself. I will respond as quickly as possible and look forward to hearing from you.',
      labelName: 'Your Name',
      labelMail: 'Your Email',
      labelMsg: 'Your Message',
      labelNameError: 'Please enter your Name',
      labelMailError: 'Please enter a valid email address',
      labelMessageError: 'Please enter a message',
      privacyPol1: `I've read the`,
      privacyPolLink: 'privacy policy',
      privacyPol2: 'and agree to the processing of my data as outlined.',
      send: 'Send'
    },
    german:{
      headline:'Kontaktieren Sie mich',
      text:'Sie sind sich noch nich sicher, ob ich der richtige für Sie bin? Schreiben Sie mir eine Nachricht und überzeugen sie sich selbst. Ich werde so schnell wie möglich antworten und freue mich von Ihnen zu hören.',
      labelName: 'Ihr Name',
      labelMail: 'Ihre Email',
      labelMsg: 'Ihre Nachricht',
      labelNameError: 'Ihr Name fehlt',
      labelMailError: 'Ihre E-Mailadresse ist falsch',
      labelMessageError: 'Ihre Nachricht fehlt',
      privacyPol1: `Ich habe die`,
      privacyPolLink: 'Datenschutzrichtlinie',
      privacyPol2: ' gelesen und stimme der oben beschriebenen Verarbeitung meiner Daten zu.',
      send: 'Senden'
    },

  }
  isPrivacyPolicyChecked = false;
  yourName = '';
  yourMail = '';
  yourMessage = '';
  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }
  
  submit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      console.error('Formular ungültig!');
      return;
    }
  
    console.log('Formular erfolgreich gesendet:', form.value);
  }
  
}
