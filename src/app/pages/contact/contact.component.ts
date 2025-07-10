import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule here

@Component({
  selector: 'app-contact',
  standalone: true,                         // ✅ This tells Angular it's a standalone component
  imports: [FormsModule],                   // ✅ Import FormsModule here!
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    alert('Thank you! Your message has been sent.');
    this.contact = { name: '', email: '', message: '' }; // Reset form
  }
}