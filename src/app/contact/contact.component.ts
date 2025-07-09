import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal<string | null>(null);

  contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'contact@todoapp.com',
      link: 'mailto:contact@todoapp.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Todo Street, Task City, TC 12345',
      link: null
    },
    {
      icon: '🌐',
      title: 'Website',
      value: 'www.todoapp.com',
      link: 'https://www.todoapp.com'
    }
  ];

  onSubmit(): void {
    if (!this.isFormValid()) {
      this.submitError.set('Please fill in all required fields.');
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(null);

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      this.resetForm();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 5000);
    }, 2000);
  }

  private isFormValid(): boolean {
    return !!(this.contactForm.name.trim() && 
              this.contactForm.email.trim() && 
              this.contactForm.subject.trim() && 
              this.contactForm.message.trim());
  }

  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
} 