import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail(form: any) {
    emailjs
      .send(
        'service_8mwllxe',
        'template_3flqkmv',
        {
          from_name: this.contactData.name,
          from_email: this.contactData.email,
          message: this.contactData.message,
        },
        'tOtchTun8CbxXOG67',
      )
      .then(() => {
        alert('Messaggio inviato!');

        // 👇 QUI VA MESSO
        form.resetForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error);
        alert('Errore nell’invio');
      });
  }
}
