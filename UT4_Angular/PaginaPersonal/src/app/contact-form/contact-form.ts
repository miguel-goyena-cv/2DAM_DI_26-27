import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../services/contact-service';
import { ContactModel } from '../models/ContactModel';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact-form',
  styleUrl: './contact-form.scss',
  templateUrl: './contact-form.html',
})
export class ContactForm {

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });


  constructor(private contactService: ContactService, private http: HttpClient){};

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  sendMessage() {
    let contacto = new ContactModel(this.contactForm.value.email!, this.contactForm.value.message!);
    this.contactService.anadirContacto(contacto)
    .subscribe(newContact => {
      alert('Contact Created:'+ JSON.stringify(newContact));
    });
  }
}
