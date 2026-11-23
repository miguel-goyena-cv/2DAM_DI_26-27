import { Component, inject, signal } from '@angular/core';
import { ContactService } from '../services/contact-service';
import { ContactModel } from '../models/ContactModel';

@Component({
  imports: [],
  selector: 'app-contact-list',
  styleUrl: './contact-list.scss',
  templateUrl: './contact-list.html',
})
export class ContactList {

  contactos = signal<ContactModel[]>([]);

  constructor(private contactService: ContactService) { }

  ngOnInit() {
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
