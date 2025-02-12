import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SetLanguageService } from './../set-language.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  http = inject(HttpClient);
  globalLanguage: string = 'DE';
  staticTexts = {
    english: {
      headline: 'Contact me',
      text: 'Are you still not sure whether I am the right person for you? Write me a message and see for yourself. I will respond as quickly as possible and look forward to hearing from you.',
      labelName: 'Your Name',
      labelMail: 'Your Email',
      labelMsg: 'Your Message',
      labelNameError: 'Please enter your Name',
      labelMailError: 'Please enter a valid email address',
      labelMessageError: 'Please enter a message',
      privacyPol1: `I've read the`,
      privacyPolLink: 'privacy policy',
      privacyPol2: 'and agree to the processing of my data as outlined.',
      send: 'Send',
      privacyError: 'Please accept the privacy policy.',
      msgError: 'There was an error sending your message.',
      msgDone: 'Your message has been sent.'

    },
    german: {
      headline: 'Kontaktieren Sie mich',
      text: 'Sie sind sich noch nich sicher, ob ich der richtige für Sie bin? Schreiben Sie mir eine Nachricht und überzeugen sie sich selbst. Ich werde so schnell wie möglich antworten und freue mich von Ihnen zu hören.',
      labelName: 'Ihr Name',
      labelMail: 'Ihre Email',
      labelMsg: 'Ihre Nachricht',
      labelNameError: 'Ihr Name ist erforderlich',
      labelMailError: 'Ihre E-Mailadresse ist erforderlich',
      labelMessageError: 'Ihre Nachricht ist zu kurz',
      privacyPol1: `Ich habe die`,
      privacyPolLink: 'Datenschutzrichtlinie',
      privacyPol2: ' gelesen und stimme der oben beschriebenen Verarbeitung meiner Daten zu.',
      send: 'Senden',
      privacyError: 'Bitte akzeptieren Sie die Datenschutzerklärung.',
            msgError: 'Es gab einen Fehler beim Senden der Nachricht.',
      msgDone: 'Ihre Nachricht wurde gesendet.'
    },
  };
  isPrivacyPolicyChecked = false;
  yourName = '';
  yourMail = '';
  yourMessage = '';
  messageSent = false;
  messageSentFail = false;

  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }

  isFormValid(): boolean {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.yourMail);
    return (
      this.isPrivacyPolicyChecked &&
      this.yourName.trim() !== '' &&
      isEmailValid &&
      this.yourMessage.length >= 10
    );
  }

  submit(form: NgForm) {
    if (form.invalid || !this.isPrivacyPolicyChecked) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      console.error('Formular ungültig!');
      return;
    }
  
    const payload = {
      email: this.yourMail,
      name: this.yourName,
      message: this.yourMessage,
    };
  
    this.http.post('https://jonasgersting.de/sendMail.php', payload).subscribe({
      next: (response) => {
        this.messageSent = true;
        console.log('E-Mail erfolgreich gesendet:', response);
        form.resetForm();
        this.isPrivacyPolicyChecked = false;
        setTimeout(() => {
          this.messageSent = false;
        }, 2000);
      },
      error: (error) => {
        this.messageSentFail = true;
        console.error('Fehler beim Senden der E-Mail:', error);
        setTimeout(() => {
          this.messageSentFail = false;
        }, 2000);
      },
    });
  }
  
}