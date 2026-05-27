import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log(this.contactData);

    alert('Messaggio inviato!');

    this.contactData = {
      name: '',
      email: '',
      message: ''
    };
  }

}