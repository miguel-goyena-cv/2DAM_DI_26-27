import { Component, signal } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';
import { ContactList } from '../contact-list/contact-list';

@Component({
  imports: [ContactForm, ContactList],
  selector: 'app-contact-page',
  styleUrl: './contact-page.scss',
  templateUrl: './contact-page.html',
})
export class ContactPage {
}
