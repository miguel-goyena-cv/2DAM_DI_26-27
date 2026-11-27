import { Component, inject, signal } from '@angular/core';
import { ContactService } from '../services/contact-service';
import { ContactModel } from '../models/ContactModel';
import { Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-contact-list',
  styleUrl: './contact-list.scss',
  templateUrl: './contact-list.html',
})
export class ContactList {

  contactos = signal<ContactModel[]>([]);

  private subscriptionUpdate: Subscription | null = null;

  constructor(private contactService: ContactService) { }

  ngOnInit() {

    this.listarContactos();

    // We subscribe to changes in Contacts
    this.subscriptionUpdate = this.contactService.changesOnContacts.subscribe(
      () => {
        this.listarContactos();
      }
    );

  }

  ngOnDestroy() {
    this.subscriptionUpdate!.unsubscribe();
  }


  private listarContactos() {
    this.contactService.listarContactos()
      .subscribe({

        next: response => {
          console.log('Body Response:', response.body);
          console.log('Status Response:', response.status);
          if (response.body != null && response.status === 200)
            this.contactos.set(response.body);
          else
            console.error('No hay contactos o el status de la peticion es incorrecto', response.status)
        },

        error: error => console.error('Error al cargar los contactos', error)

      });
  }

}
