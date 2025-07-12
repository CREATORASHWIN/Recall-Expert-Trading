import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add CommonModule here
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  popupMessage: string = '';
  showPopup: boolean = false;

  submitForm() {
    if (!this.contact.name.trim() || !this.contact.email.trim() || !this.contact.message.trim()) {
      this.popupMessage = '⚠️ Please fill in all fields.';
      this.showPopup = true;

      setTimeout(() => {
        this.popupMessage = '';
        this.showPopup = false;
      }, 3000);

      return;
    }

    this.popupMessage = '✅ Thank you! We will contact you shortly.';
    this.showPopup = true;

    // Reset form data
    this.contact = {
      name: '',
      email: '',
      message: ''
    };

    // Hide popup after 4 seconds
    setTimeout(() => {
      this.popupMessage = '';
      this.showPopup = false;
    }, 4000);
  }
}


