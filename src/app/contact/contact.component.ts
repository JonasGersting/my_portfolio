import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isPrivacyPolicyChecked = false;
  yourName = '';
  yourMail = '';
  yourMessage = '';

  labelName = 'Your Name';
  labelNameError = 'Please enter your Name';
  labelMail = 'Your Email';
  labelMailError = 'Please enter a valid email address';
  labelMessage = 'Your Message';
  labelMessageError = 'Please enter a message';
  submit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      console.error('Formular ungültig!');
      return;
    }
  
    console.log('Formular erfolgreich gesendet:', form.value);
  }
  
}
