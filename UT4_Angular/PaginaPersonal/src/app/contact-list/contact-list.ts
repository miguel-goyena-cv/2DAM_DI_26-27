import { Component, inject } from '@angular/core';
import { ContactService } from '../services/contact-service';
import { ContactModel } from '../models/ContactModel';

@Component({
  imports: [],
  selector: 'app-contact-list',
  styleUrl: './contact-list.scss',
  templateUrl: './contact-list.html',
})
export class ContactList {

  constructor(private contactService: ContactService) {}

  listarContactos(): ContactModel[] {
    return this.contactService.listarContactos();
  }
}
